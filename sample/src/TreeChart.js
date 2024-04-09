import React, { useRef, useEffect, useState } from "react";
import { select, hierarchy, tree, linkHorizontal } from "d3";
import useResizeObserver from "./useResizeObserver";

function TreeChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [tooltipText, setTooltipText] = useState("");

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const root = hierarchy(data);

    const treeLayout = tree().size([900, dimensions.width]);
    treeLayout(root);

    const linkGenerator = linkHorizontal()
      .x((d) => d.y + 165)
      .y((d) => d.x);

    // Define an arrowhead marker
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 8)
      .attr("refY", 5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "#00D9A7");

    // Update node positions
    const nodes = svg
      .selectAll(".node")
      .data(root.descendants())
      .join("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.y},${d.x - 27})`);

    const rect = nodes
      .append("rect")
      .attr("width", 170) // Adjust the width of the box
      .attr("height", 54) // Adjust the height of the box
      .attr("rx", 12)
      .attr("fill", "white") // Set box fill color
      .attr("stroke", "#00D9A7") // Set box border color
      .attr("stroke-width", 1); // Set box border width

    nodes
      .append("text")
      .attr("x", 85) // Adjust text position
      .attr("y", 30) // Adjust text position
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .text((d) =>
        d.data.name.length > 12
          ? d.data.name.substring(0, 12) + "..."
          : d.data.name
      ); // Display node name

    rect.on("mouseover", function (event, d) {
      const textWidth = this.parentNode.querySelector("text");
      console.log(textWidth.innerHTML);

      if (textWidth.getBBox().width > 170) {
        setTooltipText(d.data.name);
      }
    });

    rect.on("mouseout", function () {
      setTooltipText("");
    });
    // Draw links between nodes
    svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#00D9A7") // Set link color
      .attr("stroke-dasharray", "0 10 10")
      .attr("marker-end", "url(#arrowhead)") // Add arrowhead to the end of the link
      .attr("d", linkGenerator);
  }, [data, dimensions, tooltipText]);

  return (
    <div
      ref={wrapperRef}
      style={{ marginBottom: "2rem", position: "relative" }}
    >
      <svg ref={svgRef}></svg>
      {tooltipText && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "0.5rem",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}

export default TreeChart;
