import { FC } from "react";

const NotificationCenter: FC = () => {
  return (
    <div className="notification-container">
      <div className="column">
        <div className="input-label row">
          <label>Last Day notification</label>
          <div className="helper-text">Reminder for the last day</div>
          <input type="checkbox" placeholder="New Password" />
        </div>
        <div className="input-label row">
          <label>Last Day notification</label>
          <div className="helper-text">Reminder for the last day</div>
          <input type="checkbox" placeholder="New Password" />
        </div>
        <div className="input-label row">
          <label>Last Day notification</label>
          <div className="helper-text">Reminder for the last day</div>
          <input type="checkbox" placeholder="New Password" />
        </div>
        <div className="input-label row">
          <label>Last Day notification</label>
          <div className="helper-text">Reminder for the last day</div>
          <input type="checkbox" placeholder="New Password" />
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
