import React from "react";

const data = [
  { label: "Underfunded", value: "$50.00" },
  { label: "Assigned Last Month", value: "$4,145.23" },
  { label: "Spent Last Month", value: "$2,745.34" },
  { label: "Average Assigned", value: "$3,451.37" },
  { label: "Average Spent", value: "$2,590.71" },
  { label: "Reset Assigned Amounts", value: "$0.00" },
  { label: "Reset Available Amounts", value: "$0.00" },
];

const AutoAssignPanel: React.FC = () => {
  return (
    <div className="auto-assign-panel">
      <div className="panel-header">
        ⚡ Auto-Assign <span className="dropdown-icon">▾</span>
      </div>
      <ul className="panel-list">
        {data.map((item, index) => (
          <li key={index} className="panel-row">
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoAssignPanel;
