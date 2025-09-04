import { FC } from "react";
import { TransTabProps } from "../../../types/types";

const TransTab: FC<TransTabProps> = ({ DataTap }) => {
  return (
    <div className="tab-container">
      <span className="tab-name tab">{DataTap.group_name}</span>
      <span className="tab-category tab">{DataTap.category}</span>
      <span className="tab-amount tab">{`${DataTap.paid_amount} ${DataTap.currency_type}`}</span>
      <span className="tab-time tab">{DataTap.time}</span>
      <span className="tab-date tab">{DataTap.date}</span>
    </div>
  );
};

export default TransTab;
