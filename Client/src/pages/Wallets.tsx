import { FC, useState, useEffect } from "react";
import Header from "../components/ui/Header";
import Card from "../components/common/cards/Cards";
import FilterBar from "../components/ui/budgetPanel/FilterBar";
import CardModal from "../components/modals/CardModal";
import ModalPortal from "../components/modals/ModalPortal";

const Wallets: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [edit, onEdit] = useState(Boolean);

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
      <Header title="Wallet" />
      <div className="wallets-container">
        <FilterBar
          onOpenModal={() => setOpenModal(true)}
          onEdit={() => onEdit(!edit)}
        />
        <div className="cards-swapper">
          {wallets.length === 0 && (
            <div className="no-wallets" onClick={() => setOpenModal(true)}>
              Create a Wallet Here
            </div>
          )}
          {wallets.map((wallet, key) => (
            <Card key={key} wallet={wallet} ShowEditOptions={edit} />
          ))}
        </div>
      </div>
      {openModal && (
        <ModalPortal onClose={() => setOpenModal(false)}>
          <CardModal onClose={() => setOpenModal(false)} />
        </ModalPortal>
      )}
    </div>
  );
};

export default Wallets;
