import { useState, useEffect, FC } from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import TabList from "./TabList";

interface Group {
  id: number;
  group_name: string;
  pay_amount: number;
  status: string;
  plan_type: string;
  plan_amount: number;
}

interface TableListProps {
  onOpenModal: () => void;
}

const TableList: FC<TableListProps> = ({ onOpenModal }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedTab, setSelectedTab] = useState("available");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const fetchGroups = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/group/get-groups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch groups");
      const data = await res.json();
      console.log(data);
      setGroups(data);
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className="table-container">
      <span className="list-header">
        <div className="selector">
          <CheckButton isChecked={false} />
          <div className="list-title">CATEGORY</div>
        </div>
        <div
          className={`cost-marker tab ${
            selectedTab === "cost" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("cost")}
        >
          Cost Amount
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
      </span>
      {groups.length === 0 && (
        <div className="no-groups" onClick={onOpenModal}>
          Create a Group Here
        </div>
      )}
      <div className="group-list">
        {groups.map((group) => (
          <TabList key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
};

export default TableList;
