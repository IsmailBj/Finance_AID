import { FC, useState, useEffect } from "react";
import TransactionFilter from "./TransactionFilter";
import TransTab from "./TableList/TabTrans";
import { TransactionListProps } from "../../types/types";

const TransactionList: FC<TransactionListProps> = ({ list }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterBy, setFilterBy] = useState("Date");

  useEffect(() => {
    console.log("Transaction list updated:", list);
  }, [list]);

  if (!list || list.length === 0) {
    return <div className="no-transactions">No transactions available.</div>;
  }

  return (
    <div className="transaction-list">
      <TransactionFilter setFilterBy={setFilterBy} />
      {list.length === 0 && (
        <div className="no-groups">Create a Group Here</div>
      )}
      <div className="list-container">
        {list.map((DataTap) => (
          <TransTab DataTap={DataTap} key={DataTap.id} />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
