import { FC, useState } from "react";
import { ListCardProps } from "../../../types/types";
import { PiArrowBendDoubleUpLeftDuotone } from "react-icons/pi";
import { RiArrowDropUpLine } from "react-icons/ri";

const ListCard: FC<ListCardProps> = ({ groups }) => {
  const [collaps, setCollaps] = useState<boolean>(true);

  const handleUndo = async (groupId: number) => {
    console.log("Undoing transaction for group ID:", groupId);
    try {
      const res = await fetch(
        `http://localhost:3000/api/transaction/delete-transaction/${groupId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log("Transaction deleted successfully:", data);
        window.location.reload();
      } else {
        console.error(
          "Error deleting transaction:",
          data.error || "Unknown error"
        );
        alert(data.error || "Failed to delete transaction");
      }
    } catch (error) {
      console.error("Error in handleUndo:", error);
      alert("An error occurred while trying to undo the transaction.");
    }
  };

  return (
    <div className="list-card">
      <div className="panel-header" onClick={() => setCollaps(!collaps)}>
        <div className="panel-icon">⚡</div>
        <span className="panel-title">Completed</span>
        <span className={`dropdown-icon ${collaps ? "rotate" : ""}`}>
          <RiArrowDropUpLine />
        </span>
      </div>
      <ul className={`panel-list ${collaps ? "expend" : ""}`}>
        {groups
          .filter((group) => group.status === "paid")
          .map((group, index) => (
            <div key={index} className="panel-item">
              <span className="icon undo" onClick={() => handleUndo(group.id)}>
                <PiArrowBendDoubleUpLeftDuotone />
              </span>
              <li className="panel-row">
                <span className="label">{group.group_name}</span>
                <span className="value">{group.group_category}</span>
                <span className="value">{group.pay_amount}</span>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ListCard;
