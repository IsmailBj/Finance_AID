import React from "react";
import { ListCardProps } from "../../../types/types";
import { PiArrowBendDoubleUpLeftDuotone } from "react-icons/pi";

const ListCard: React.FC<ListCardProps> = ({ groups }) => {
  return (
    <div className="list-card">
      <div className="panel-header">
        ⚡ Completed <span className="dropdown-icon">▾</span>
      </div>
      <ul className="panel-list">
        {groups
          .filter((group) => group.status === "paid")
          .map((group, index) => (
            <li key={index} className="panel-row">
              <span className="icon">
                <PiArrowBendDoubleUpLeftDuotone />
              </span>
              <span className="label">{group.group_name}</span>
              <span className="value">{group.group_category}</span>
              <span className="value">{group.pay_amount}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListCard;
