import { FC } from "react";
import CardImg from "../../../assets/images/credit-card.png";

interface Wallet {
  card_name: string;
  balance: number;
  currency_type: string;
  card_type: string;
  expire_date: string;
}

interface CardProps {
  wallet: Wallet;
}

const Card: FC<CardProps> = ({ wallet }) => {
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
        <div className="tools">
          <div className="card_actions">
            <button className="btn">View Details</button>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
