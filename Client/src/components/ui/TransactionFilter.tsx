import React, { useState } from "react";

type Props = {
  setFilterBy: (value: string) => void;
};

const TransactionFilter: React.FC<Props> = ({ setFilterBy }) => {
  const [activeFilter, setActiveFilter] = useState<string>("group_name");

  const handleClick = (value: string) => {
    setFilterBy(value);
    setActiveFilter(value);
  };

  return (
    <div className="transaction-filter">
      <div
        className={`filter-item ${
          activeFilter === "group_name" ? "active" : ""
        }`}
        onClick={() => handleClick("group_name")}
      >
        <span className="filter-text tab">Name</span>
      </div>

      <div
        className={`filter-item ${activeFilter === "Category" ? "active" : ""}`}
        onClick={() => handleClick("Category")}
      >
        <span className="filter-text tab">Category</span>
      </div>

      <div
        className={`filter-item ${activeFilter === "Amount" ? "active" : ""}`}
        onClick={() => handleClick("Amount")}
      >
        <span className="filter-text tab">Amount</span>
      </div>

      <div
        className={`filter-item ${activeFilter === "Time" ? "active" : ""}`}
        onClick={() => handleClick("Time")}
      >
        <span className="filter-text tab">Time</span>
      </div>

      <div
        className={`filter-item ${activeFilter === "Date" ? "active" : ""}`}
        onClick={() => handleClick("Date")}
      >
        <span className="filter-text tab">Date</span>
      </div>
    </div>
  );
};

export default TransactionFilter;
