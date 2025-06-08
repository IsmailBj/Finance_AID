import React from "react";
import { CheckButton } from "../../common/buttons/Buttons";

const TableList: React.FC = () => {
  return (
    <div className="table-container">
      <span className="list-header">
        <div className="selector">
          <CheckButton isChecked={false} />
          <div className="list-title">CATEGORY</div>
        </div>
        <div className="budgeted-marker">BUDGETED</div>
        <div className="activity-marker">ACTIVITY</div>
        <div className="available-marker">AVAILABLE</div>
      </span>
      <span className="group-list"></span>
    </div>
  );
};

export default TableList;
