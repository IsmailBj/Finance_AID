import TransactionFilter from "../components/ui/TransactionFilter";
import { useState } from "react";

const Transactions = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterBy, setFilterBy] = useState("name");

  return (
    <div className="transactions-page">
      <h1 className="page-title">Transactions</h1>
      <div className="filter-container">
        <TransactionFilter setFilterBy={setFilterBy} />
      </div>
      <div className="transactions-list">
        {/* Transactions list will go here */}
      </div>
    </div>
  );
};

export default Transactions;
