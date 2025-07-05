import TransactionFilter from "../components/ui/TransactionFilter";
import { useState } from "react";

const Transactions = () => {
  const [filterBy, setFilterBy] = useState("name");

  return (
    <div className="transactions-page">
      <h1 className="page-title">Transactions</h1>
      <div className="filter-container">
        <TransactionFilter setFilterBy={setFilterBy} />
      </div>
      <div className="transactions-list">
        {filterBy === "name" && (
          <div className="transaction-item">{filterBy}</div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
