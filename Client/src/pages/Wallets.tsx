import { FC, useState, useEffect } from "react";
import Header from "../components/ui/Header";
import Card from "../components/common/cards/Cards";
import FilterBar from "../components/ui/budgetPanel/FilterBar";
import CardModal from "../components/modals/CardModal";

const Wallets: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [wallets, setWallets] = useState([]);

  const fetchWallets = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/wallet/get-wallets", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch wallets");
      const data = await res.json();
      setWallets(data);
    } catch (err) {
      console.error(err instanceof Error ? err.message : "An error occurred");
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  return (
    <div className="wallets-page">
      <Header tittle="Wallet" />
      <div className="wallets-container">
        <FilterBar setOpenModal={setOpenModal} />
        <div className="cards-swapper">
          {wallets.length === 0 && (
            <div className="no-wallets" onClick={() => setOpenModal(true)}>
              Create a Wallet Here
            </div>
          )}
          {wallets.map((wallet, key) => (
            <Card key={key} wallet={wallet} />
          ))}
        </div>
      </div>
      {openModal && <CardModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Wallets;
