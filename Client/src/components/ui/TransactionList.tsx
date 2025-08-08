import { FC, useState } from "react";
import TransactionFilter from "./TransactionFilter";
const TransactionList: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterBy, setFilterBy] = useState("Date");

  return (
    <div className="transaction-list">
      <div className="transaction-list-header">
        <TransactionFilter setFilterBy={setFilterBy} />
      </div>
    </div>
  );
};

export default TransactionList;
