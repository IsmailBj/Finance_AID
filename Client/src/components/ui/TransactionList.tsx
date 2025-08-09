import { FC, useState } from "react";
import TransactionFilter from "./TransactionFilter";
import TransTab from "./TableList/TabTrans";
import { TransactionListProps } from "../../types/types";

const TransactionList: FC<TransactionListProps> = ({ list }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterBy, setFilterBy] = useState("Date");

  return (
    <div className="transaction-list">
      <div className="transaction-list-header">
        <TransactionFilter setFilterBy={setFilterBy} />
        {list.length > 0 && (
          <div className="no-groups">Create a Group Here</div>
        )}
        <div className="lists-container">
          {list.map((DataTap) => (
            <div key={DataTap.id} className="transaction-item">
              <TransTab DataTap={DataTap} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
