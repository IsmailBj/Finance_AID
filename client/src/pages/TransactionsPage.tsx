import { FC, useEffect, useState } from "react";
import Header from "../components/ui/Header";
import TransactionList from "../components/ui/TransactionList";
import { TransactionType } from "../types/types";

const Transactions: FC = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const fetchTransactions = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/transaction/get-transactions",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch transactions");
      const data = await res.json();
      setTransactions(data || []);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
      alert(
        "An error occurred while fetching transactions. Please try again later."
      );
    }
  };

  useEffect(() => {
    fetchTransactions();
    console.log("Transactions fetched:", transactions);
  }, []);

  return (
    <div className="transactions-page">
      <Header title="Transactions" />
      <div className="transactions-content">
        <TransactionList list={transactions} />
      </div>
    </div>
  );
};

export default Transactions;
