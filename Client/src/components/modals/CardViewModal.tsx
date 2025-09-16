import { FC } from "react";
import ModalPortal from "./ModalPortal";
import { Wallet } from "../../types/types";

type MoreInfoModalProps = {
  onClose: () => void;
  ExtraInfo: Wallet;
};

const CardMoreViewModal: FC<MoreInfoModalProps> = ({ onClose, ExtraInfo }) => {
  return (
    <ModalPortal onClose={onClose}>
      <div className="more-info-modal">
        <h2>More Information</h2>
        <p>{ExtraInfo.card_name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </ModalPortal>
  );
};

export default CardMoreViewModal;
