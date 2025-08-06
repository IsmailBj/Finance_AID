import { FC, ReactElement } from "react";
import { ConfirmationModalProps } from "../../types/types";

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  message,
  onClose,
  onConfirm,
}): ReactElement => {
  return (
    <div className="confirmation-modal">
      <h1 className="title">Confirmation</h1>
      <p className="message">
        Are you sure you want to proceed? with {message}
      </p>
      <div className="actions">
        <button className="confirm-button" onClick={onConfirm}>
          Confirm
        </button>
        <button className="cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
