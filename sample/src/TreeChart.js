// TreeChart.tsx
import React, { useRef, useEffect, useState } from "react";
import { select, hierarchy, tree } from "d3";
import useResizeObserver from "./useResizeObserver.tsx";

interface Node {
  name: string;
  children?: Node[];
}

interface TreeChartProps {
  data: Node;
}

function TreeChart({ data }: TreeChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(wrapperRef);
  const [tooltipText, setTooltipText] = useState<string>("");
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const root = hierarchy(data);

    const treeLayout = tree<Node>().size([dimensions.height, dimensions.width]);
    treeLayout(root);

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
      .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

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
        d.data.name.length > 15
          ? d.data.name.substring(0, 15) + "..."
          : d.data.name
      ); // Display node name

    rect.on("mouseover", function (event, d: any) {
      if (d.data.name.length > 15) {
        setTooltipText(d.data.name);
        const tooltipTop = d.x - 27;
        const tooltipLeft = d.y;
        setTooltipStyle({
          top: `${tooltipTop}px`,
          left: `${tooltipLeft}px`,
        });
      }
    });

    rect.on("mouseout", function () {
      setTooltipText("");
    });

    // Define the link generator function
    const linkGenerator = (d: any) => {
      const sourceX = d.source.x + 27;
      const sourceY = d.source.y + 200; // Adjust the source node position
      const targetX = d.target.x + 27;
      const targetY = d.target.y;

      return `
        M${sourceY},${sourceX}
        C${(sourceY + targetY) / 2},${sourceX},
         ${(sourceY + targetY) / 2},${targetX},
         ${targetY},${targetX}
      `;
    };

    const linkGenerator2 = (d: any) => {
      return `
        M${d.source.y + 170},${d.source.x + 27} 
        L${d.source.y + 200},${d.source.x + 27}
      `;
    };
    // Draw links between nodes
    svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#00D9A7") // Set link color
      .attr("stroke-dasharray", "10 10 10")
      .attr("marker-end", "url(#arrowhead)") // Add arrowhead to the end of the link
      .attr("d", linkGenerator);

    svg
      .selectAll(".link2")
      .data(root.links())
      .join("path")
      .attr("class", "link2")
      .attr("fill", "none")
      .attr("stroke", "#00D9A7") // Set link color
      .attr("stroke-dasharray", "10 10 10")
      .attr("d", linkGenerator2);
  }, [data, dimensions, tooltipText, tooltipStyle]);

  useEffect(() => {
    if (!data || !wrapperRef.current) return;

    const calculateMaxNodesPerLevel = (node: Node): number[] => {
      const maxNodes: number[] = [];

      const traverse = (node: Node, level: number) => {
        if (!maxNodes[level]) {
          maxNodes[level] = 0;
        }

        maxNodes[level]++;

        if (node.children) {
          node.children.forEach((child) => traverse(child, level + 1));
        }
      };

      traverse(node, 0);
      return maxNodes;
    };

    const maxNodesPerLevel = calculateMaxNodesPerLevel(data);
    console.log(Math.max(...maxNodesPerLevel));
    const maxHeight = Math.max(...maxNodesPerLevel) * 225; // Height of each node is assumed to be 54 pixels

    wrapperRef.current.style.height = `${maxHeight}px`;
  }, [data]);

  return (
    <div
      className="box1"
      ref={wrapperRef}
      style={{ marginBottom: "2rem", position: "relative", width: "1300px" }}
    >
      <svg
        style={{
          height: "100%",
          width: "1700px",
          overflowX: "scroll",
          border: "1px solid black",
          marginLeft: "10px",
          paddingLeft: "10px",
        }}
        ref={svgRef}
      ></svg>
      {tooltipText && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "0.5rem",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
            ...tooltipStyle,
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}

export default TreeChart;
