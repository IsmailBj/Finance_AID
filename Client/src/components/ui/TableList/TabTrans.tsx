import { FC } from "react";
import { TransTabProps } from "../../../types/types";

const TransTab: FC<TransTabProps> = ({ DataTap }) => {
  return (
    <div className="tab-container" key={DataTap.id}>
      <span className="tab-id tab">{DataTap.group_id}</span>
      <span className="tab-date tab">{DataTap.date.split("T")[0]}</span>
      <span className="tab-currency tab">{DataTap.currency_type}</span>
      <span className="tab-amount tab">{DataTap.paid_amount}</span>
      <span className="tab-method tab">{DataTap.method_type}</span>
      <span className="tab-category tab">{DataTap.category}</span>
    </div>
  );
};

export default TransTab;
