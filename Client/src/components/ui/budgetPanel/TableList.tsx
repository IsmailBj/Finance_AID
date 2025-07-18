import { useState, useEffect, FC } from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import TabList from "./TabList";

interface Group {
  id: number;
  name: string;
  budget: number;
  status: string;
  plan_type: string;
  plan_amount: number;
}

const TableList: FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);
  return error ? (
    <div className="error-message">{error}</div>
  ) : (
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
        {groups.map((group) => (
          <TabList key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
};

export default TableList;
