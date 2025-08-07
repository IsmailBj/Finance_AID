import { FC, useState } from "react";
import { OnCloseModalProps } from "../../types/types";

const CardModal: FC<OnCloseModalProps> = ({ onClose }) => {
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  const [balance, setBalance] = useState("");
  const [currencyType, setCurrencyType] = useState("");
  const [expiresDate, setExpiresDate] = useState("");

  const submitCardDetails = async () => {
    const cardData = {
      card_name: cardName,
      card_type: cardType,
      balance,
      currency_type: currencyType,
      expire_date: expiresDate,
    };
    try {
      const res = await fetch(
        "http://localhost:3000/api/wallet/create-wallet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(cardData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        console.log("Card details saved successfully:", data);
        window.location.reload();
      } else {
        console.error(
          "Error saving card details:",
          data.error || "Unknown error"
        );
        alert(data.error || "Failed to save card details");
      }
    } catch (error) {
      console.error("Error submitting card details:", error);
    }
  };

  return (
    <div className="card-modal">
      <h1 className="title">Create Wallet</h1>
      <div className="form-inputs">
        <label htmlFor="card_name">Card Name</label>
        <input
          type="text"
          id="card_name"
          placeholder="Enter card name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />

        <label htmlFor="card_type">Card Type</label>
        <select
          id="card_type"
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
        >
          <option value="" disabled>
            Select card type
          </option>
          <option value="cash">Cash</option>
          <option value="bank">Bank</option>
          <option value="crypto">Crypto</option>
          <option value="credit">Credit</option>
          <option value="barrow">Barrow</option>
        </select>

        <label htmlFor="balance">Balance</label>
        <input
          type="number"
          id="balance"
          placeholder="Enter balance amount"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />

        <label htmlFor="currency_type">Currency Type</label>
        <select
          id="currency_type"
          value={currencyType}
          onChange={(e) => setCurrencyType(e.target.value)}
        >
          <option value="" disabled>
            Select currency
          </option>
          <option value="euro">Euro</option>
          <option value="mkd">MKD</option>
          <option value="dollar">Dollar</option>
        </select>

        <label htmlFor="expires_date">Expires Date</label>
        <input
          type="date"
          id="expires_date"
          value={expiresDate}
          onChange={(e) => setExpiresDate(e.target.value)}
        />
      </div>
      <button className="close-btn" onClick={() => onClose()}>
        Close
      </button>
      <button className="close-btn" onClick={submitCardDetails}>
        Save
      </button>
    </div>
  );
};

export default CardModal;
