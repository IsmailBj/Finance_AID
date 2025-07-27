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
        <div className="name">{wallet.card_name}</div>
        <div className="balance">{wallet.balance}</div>
        <div className="card_type">{wallet.card_type}</div>
        <div className="Currency_type">{wallet.currency_type}</div>
        <div className="card_expiry">{wallet.expire_date}</div>
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
