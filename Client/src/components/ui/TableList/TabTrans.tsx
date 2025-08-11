import { FC } from "react";
import { TransTabProps } from "../../../types/types";

const TransTab: FC<TransTabProps> = ({ DataTap }) => {
  return (
    <div className="tab-container">
      <span className="tab-amount">{DataTap.paid_amount}</span>
      <span className="tab-currency">{DataTap.currency_type}</span>
      <span className="tab-date">{DataTap.method_type}</span>
      <span className="tab-category">{DataTap.category}</span>
    </div>
  );
};

export default TransTab;
