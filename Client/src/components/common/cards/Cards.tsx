import { FC, useState } from "react";
import { CardProps } from "../../../types/types";
import ModalPortal from "../../modals/ModalPortal";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { FaTrash, FaVaadin, FaPen } from "react-icons/fa6";

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
      {ShowEditOptions && (
        <div className="tools">
          <button className="btn view">
            <FaVaadin />
          </button>
          <button className="btn edit">
            <FaPen />
          </button>
          <button
            className="btn delete"
            onClick={() => setConfirmationModal(true)}
          >
            <FaTrash />
          </button>
        </div>
      )}
      <div className="card_info">
        <div className="line balance">
          {wallet.balance} {wallet.currency_type}
        </div>
        <div className="line name">{wallet.card_name}</div>
        <div className="line card_expiry">{wallet.expire_date}</div>
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
