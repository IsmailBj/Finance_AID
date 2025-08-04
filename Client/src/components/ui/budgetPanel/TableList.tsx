import { useState, FC } from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import TabList from "./TabList";
import { TableListProps } from "../../../types/types";

const TableList: FC<TableListProps> = ({ onOpenModal, groups, onEdit }) => {
  const [selectedTab, setSelectedTab] = useState("available");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="table-container">
      <span className="list-header">
        <div className="selector">
          <CheckButton isChecked={false} />
        </div>
        <div className="right-section">
          <div className="list-title">Name</div>
          <div className="list-title">CATEGORY</div>
        </div>
        <div className="center-section">
          <div
            className={`cost-marker tab ${
              selectedTab === "From" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("From")}
          >
            From
          </div>
          <div
            className={`cost-marker tab ${
              selectedTab === "plan" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("plan")}
          >
            Plan
          </div>
          <div
            className={`cost-marker tab ${
              selectedTab === "Expires" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("Expires")}
          >
            Expires
          </div>
        </div>
        <div className="left-section">
          <div
            className={`cost-marker tab ${
              selectedTab === "cost" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("cost")}
          >
            Pay
          </div>
          <div
            className={`available-marker tab ${
              selectedTab === "available" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("available")}
          >
            Allocate
          </div>
          <div
            className={`activity-marker tab ${
              selectedTab === "totalLTP" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("totalLTP")}
          >
            Total LTP
          </div>
        </div>
      </span>
      {groups.length === 0 && (
        <div className="no-groups" onClick={onOpenModal}>
          Create a Group Here
        </div>
      )}
      <div className="group-list">
        {groups.map((group) => (
          <TabList key={group.id} group={group} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default TableList;
