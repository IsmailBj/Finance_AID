import { useState, FC } from "react";
import TabList from "./TabList";
import { TableListProps } from "../../../types/types";
import { FaLandmark } from "react-icons/fa";
import filterGroups from "../../../helpers/FilterGroups";

const TableList: FC<TableListProps> = ({ onOpenModal, groups, onEdit }) => {
  const [selectedTab, setSelectedTab] = useState("available");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  // ✅ Apply filter here
  const filteredGroups = filterGroups(groups, selectedTab);

  return (
    <div className="table-container">
      <span className="list-header">
        <FaLandmark />
        <div className="right-section">
          <div className="list-title">Name</div>
          <div className="list-title">CATEGORY</div>
        </div>
        <div className="center-section">
          <div
            className={`cost-marker tab ${
              selectedTab === "from" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("from")}
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
        {filteredGroups.map((group) => (
          <TabList key={group.id} group={group} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default TableList;
