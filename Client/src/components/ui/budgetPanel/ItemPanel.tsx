import React from "react";
import FilterBar from "./FilterBar";
import AutoAssignPanel from "./AutoAssignCard";
import TableList from "./TableList";

const ItemPanel: React.FC = () => {
  return (
    <div className="item-panel-section">
      <div className="item-panel">
        <FilterBar />
        <TableList />
      </div>
      <div className="cards-holder">
        <AutoAssignPanel />
      </div>
    </div>
  );
};

export default ItemPanel;
