import { FC, useState } from "react";

interface GroupModalProps {
  onClose: () => void;
}

const GroupModal: FC<GroupModalProps> = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastDay, setLastDay] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [planAmount, setPlanAmount] = useState("");
  const [paymentPlanType, setPaymentPlanType] = useState("");

  const submitGroupDetails = async () => {
    const GroupData = {
      group_name: groupName,
      status: status,
      start_date: startDate,
      end_date: lastDay,
      pay_amount: payAmount,
      plan_amount: planAmount,
      plan_type: paymentPlanType,
    };

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
      <input
        type="text"
        id="group_budget"
        placeholder="Enter you wish to pay"
        value={payAmount}
        onChange={(e) => setPayAmount(e.target.value)}
      />

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
