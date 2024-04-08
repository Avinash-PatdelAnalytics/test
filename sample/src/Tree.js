import React from "react";
import "./Tree.css"; // CSS file for styling

const TreeNode = ({ data }) => {
  if (!data) return null;

  const { name, children } = data;

  return (
    <div className="node">
      <span>{name}</span>
      {children && (
        <div className="children">
          {children.map((child, index) => (
            <TreeNode key={index} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = ({ data }) => {
  return (
    <div className="tree">
      <TreeNode data={data} />
    </div>
  );
};

export default Tree;
