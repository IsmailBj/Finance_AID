import { FC, useState, useEffect } from "react";
import { OnCloseModalProps } from "../../types/types";
import IconType from "../common/Icons/Icon";

const GroupModal: FC<OnCloseModalProps> = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastDay, setLastDay] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [planAmount, setPlanAmount] = useState("");
  const [paymentPlanType, setPaymentPlanType] = useState("");
  const [currencyType, setCurrencyType] = useState("");
  const [groupCategory, setGroupCategory] = useState("");

  const submitGroupDetails = async () => {
    const GroupData = {
      group_name: groupName,
      status: status,
      start_date: startDate,
      end_date: lastDay,
      pay_amount: payAmount,
      plan_amount: planAmount,
      plan_type: paymentPlanType,
      currency_type: currencyType,
      group_category: groupCategory,
    };
    console.log("Client ", GroupData);
    try {
      const res = await fetch("http://localhost:3000/api/group/create-group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(GroupData),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Card details saved successfully:", data);
        onClose();
      } else {
        alert(data.error || "Failed to save group details");
      }
    } catch (err) {
      console.error("Error submitting Group details:", err);
    }
  };

  const calculateInstallment = (amount: number, frequency: string): void => {
    if (amount >= 0) {
      switch (frequency) {
        case "monthly":
          setPayAmount(String(amount / 12));
          break;
        case "weekly":
          setPayAmount(String(amount / 52));
          break;
        default:
          setPayAmount(String(amount));
          break;
      }
    } else {
      setPayAmount("0");
    }
  };

  useEffect(() => {
    calculateInstallment(+planAmount, paymentPlanType);
  }, [paymentPlanType, planAmount]);

  return (
    <div className="group-modal">
      <h1 className="tittle">Create a Group</h1>
      <label htmlFor="group_name" className="group_name">
        Group Name
      </label>
      <input
        type="text"
        id="group_name"
        placeholder="Enter Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />

      <label htmlFor="group_type">Group Type</label>
      <select
        id="group_type"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="" disabled>
          Select Group type
        </option>
        <option value="paid">paid</option>
        <option value="unpaid">unpaid</option>
        <option value="pending">pending</option>
        <option value="unknown">unknown</option>
      </select>

      <label htmlFor="start_date" className="start_date">
        Starting Day
      </label>
      <input
        type="date"
        id="start_date"
        placeholder="when you want to start ?"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label htmlFor="end_date" className="end_date">
        Last Day
      </label>
      <input
        type="date"
        id="end_date"
        placeholder="last day to pay ?"
        value={lastDay}
        onChange={(e) => setLastDay(e.target.value)}
      />

      <label htmlFor="group_budget" className="group_budget">
        Amount on Transaction
      </label>
      <span className="group_budget" id="group_budget">
        {Number(payAmount).toFixed(2)}
      </span>

      <label htmlFor="plan_amount" className="plan_amount">
        Amount on Payment
      </label>
      <input
        type="text"
        id="plan_amount"
        placeholder="Amont you need to pay"
        value={planAmount}
        onChange={(e) => setPlanAmount(e.target.value)}
      />

      <label htmlFor="group_type">Payment Plan</label>
      <select
        id="group_type"
        value={paymentPlanType}
        onChange={(e) => setPaymentPlanType(e.target.value)}
      >
        <option value="" disabled>
          Select Payment Plan
        </option>
        <option value="one_time">One time</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <label htmlFor="group_type">Currency Type</label>
      <select
        id="group_type"
        value={currencyType}
        onChange={(e) => setCurrencyType(e.target.value)}
      >
        <option value="" disabled>
          Select Currency
        </option>
        <option value="EURO">EURO</option>
        <option value="USD">USD</option>
        <option value="MKD">MKD</option>
      </select>
      <label htmlFor="group_type">ICON</label>
      <select
        id="group_type"
        value={groupCategory}
        onChange={(e) => setGroupCategory(e.target.value)}
      >
        <option value="" disabled>
          Select ICON
        </option>
        <option value="Home">Home </option>
        <option value="Bills">Bills </option>
        <option value="Medical">Medical</option>
        <option value="Rent">Rent</option>
        <option value="Other">Other</option>
      </select>
      <IconType iconType={groupCategory} />
      <button className="close-btn" onClick={() => onClose()}>
        Close
      </button>
      <button className="close-btn" onClick={submitGroupDetails}>
        Save
      </button>
    </div>
  );
};

export default GroupModal;
