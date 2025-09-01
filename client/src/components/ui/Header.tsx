import { FC } from "react";
import { getTodayDate, getDayOfWeek } from "../../helpers/DateAndTimeHelpers";

const Header: FC<{ title: string }> = ({ title }) => {
  const formattedDate = getTodayDate();
  const dayOfWeek = getDayOfWeek();

  return (
    <div className="header">
      <div className="title-container">
        <span className="title">{title}</span>
      </div>
      <div className="days-container">
        <div className="day">{formattedDate}</div>
        <div className="day-info">{dayOfWeek}</div>
      </div>
    </div>
  );
};

export default Header;
