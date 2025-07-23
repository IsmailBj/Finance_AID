import { FC } from "react";
import CardImg from "../../../assets/images/credit-card.png";

const Card: FC = () => {
  return (
    <div className="card">
      <img src={CardImg} alt="err" />
      <div className="card_info">
        <div className="name">Bank</div>
        <div className="balance">$1000</div>
        <div className="card_number">**** **** **** 1234</div>
        <div className="card_type">Credit Card</div>
        <div className="card_expiry">12/24</div>
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
