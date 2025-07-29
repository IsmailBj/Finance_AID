import { FC } from "react";

const Header: FC<{ title: string }> = ({ title }) => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="header">
      <div className="title-container">
        <span className="title">{title}</span>
      </div>
      <div className="balance-container">
        <div className="amount-container">
          <span className="amount">300 $</span>
          <span className="status">Ready to be Assign</span>
        </div>
        <div className="assign-btn">Assing ^</div>
      </div>
      <div className="days-container">
        <div className="day">{formattedDate}</div>
        <div className="day-info">{dayOfWeek}</div>
      </div>
    </div>
  );
};

export default Header;
