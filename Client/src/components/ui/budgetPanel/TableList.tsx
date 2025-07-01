import React from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import TabList from "./TabList";

const groupList = [
  {
    id: 1,
    name: "Group Name",
    budgeted: 1000,
    activity: 500,
    available: 500,
    subGroups: [
      {
        id: 1,
        name: "Sub Group 1",
        budgeted: 300,
        activity: 200,
        available: 100,
        DatePlan: ["positive", "neutral", "neutral", "negative"],
      },
      {
        id: 2,
        name: "Sub Group 2",
        budgeted: 700,
        activity: 300,
        available: 400,
        DatePlan: ["positive", "neutral", "neutral", "negative"],
      },
    ],
  },
  {
    id: 2,
    name: "Another Group",
    budgeted: 2000,
    activity: 1500,
    available: 500,
    subGroups: [
      {
        id: 1,
        name: "Sub Group A",
        budgeted: 800,
        activity: 600,
        available: 200,
        DatePlan: ["positive", "neutral", "neutral", "negative"],
      },
      {
        id: 2,
        name: "Sub Group B",
        budgeted: 1200,
        activity: 900,
        available: 300,
        DatePlan: ["positive", "neutral", "neutral", "negative"],
      },
    ],
  },
];

const TableList: React.FC = () => {
  return (
    <div className="table-container">
      <span className="list-header">
        <div className="selector">
          <CheckButton isChecked={false} />
          <div className="list-title">CATEGORY</div>
        </div>
        <div className="budgeted-marker tab">BUDGETED</div>
        <div className="activity-marker tab">ACTIVITY</div>
        <div className="available-marker tab selected">AVAILABLE</div>
      </span>
      <div className="group-list">
        {groupList.map((group) => (
          <TabList key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
};

export default TableList;
