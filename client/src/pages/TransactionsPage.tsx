import { FC } from "react";
import Header from "../components/ui/Header";
import TransactionList from "../components/ui/TransactionList";

const Transactions: FC = () => {
  return (
    <div className="transactions-page">
      <Header title="Transactions" />
      <div className="transactions-content">
        <TransactionList />
      </div>
    </div>
  );
};

export default Transactions;
