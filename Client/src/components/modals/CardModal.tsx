import { FC } from "react";

const CardModal: FC = () => {
  return (
    <div className="card-modal">
      <h1 className="register-title">Create Account</h1>
      <div className="card-details">{/* Card details content goes here */}</div>
      <button className="close-btn">Close</button>
    </div>
  );
};

export default CardModal;
