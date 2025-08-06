import { FC, useState } from "react";
import CardImg from "../../../assets/images/credit-card.png";
import { CardProps } from "../../../types/types";
import ModalPortal from "../../modals/ModalPortal";
import ConfirmationModal from "../../modals/ConfirmationModal";

const Card: FC<CardProps> = ({ wallet, ShowEditOptions }) => {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const HandleDelete = async () => {
    const groupId = wallet.id;
    try {
      const res = await fetch(
        `http://localhost:3000/api/wallet/delete/${groupId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 204) {
        console.log("Group deleted successfully");
        alert("Group deleted successfully");
        window.location.reload();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to delete group");
      }
    } catch (error) {
      console.error("Error deleting group:", error);
      alert("Failed to delete group. Please try again.");
    }
  };
  return (
    <div className="card">
      <img src={CardImg} alt="err" />
      <div className="card_info">
        <div className="line name">
          <span className="card_label">Card Name: </span>
          {wallet.card_name}
        </div>
        <div className="line balance">
          <span className="card_label">Balance: </span>
          {wallet.balance}
        </div>
        <div className="line card_type">
          <span className="card_label">Type: </span>
          {wallet.card_type}
        </div>
        <div className="line currency_type">
          <span className="card_label">Currency: </span>
          {wallet.currency_type}
        </div>
        <div className="line card_expiry">
          <span className="card_label">Expires In: </span>
          {wallet.expire_date}
        </div>
        {ShowEditOptions && (
          <div className="tools">
            <div className="card_actions">
              <button className="btn view">View Details</button>
              <button className="btn edit">Edit</button>
              <button
                className="btn delete"
                onClick={() => setConfirmationModal(true)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
      {confirmationModal && (
        <ModalPortal onClose={() => setConfirmationModal(false)}>
          <ConfirmationModal
            message="DELETE"
            onClose={() => setConfirmationModal(false)}
            onConfirm={HandleDelete}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default Card;
