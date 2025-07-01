import React from "react";

const SubBarLine: React.FC<{ state: string }> = ({ state = "neutral" }) => {
  return <div className={`line ${state}`}></div>;
};

export default SubBarLine;

// This component renders a line with a specific state class.
// state [positive, negative, pending, neutral]
