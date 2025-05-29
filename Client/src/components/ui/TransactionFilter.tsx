type Props = {
  setFilterBy: (value: string) => void;
};

const TransactionFilter: React.FC<Props> = ({ setFilterBy }) => {
  return (
    <div className="transaction-filter">
      <div className="filter-item" onClick={() => setFilterBy("Date")}>
        <span className="filter-text">Date</span>
      </div>
      <div className="filter-item" onClick={() => setFilterBy("Category")}>
        <span className="filter-text">Category</span>
      </div>
      <div className="filter-item" onClick={() => setFilterBy("Transfer")}>
        <span className="filter-text">Transfer</span>
      </div>
      <div className="filter-item" onClick={() => setFilterBy("Amount")}>
        <span className="filter-text">Amount</span>
      </div>
    </div>
  );
};

export default TransactionFilter;
