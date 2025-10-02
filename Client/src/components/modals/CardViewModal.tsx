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
        <div className="info-header">
          <h2 className="title">More Information</h2>
        </div>
        <div className="info-body">
          <div className="info-row">
            <span className="info-label">Card Name:</span>
            <span className="info-value">{ExtraInfo.card_name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Card balance:</span>
            <span className="info-value">{ExtraInfo.balance}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Card allocated_amount:</span>
            <span className="info-value">{ExtraInfo.allocated_amount}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Card currency_type:</span>
            <span className="info-value">{ExtraInfo.currency_type}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Card card_type:</span>
            <span className="info-value">{ExtraInfo.card_type}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Card expire_date:</span>
            <span className="info-value">{ExtraInfo.expire_date}</span>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </ModalPortal>
  );
};

export default CardMoreViewModal;
