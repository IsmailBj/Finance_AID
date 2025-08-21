import { FC } from "react";

const ChangePasswordSettings: FC = () => {
  return (
    <form className="passwordReset-form">
      <div className="column">
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="examples@gmail.com" />
        </div>
        <div className="input-group">
          <label>Old Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-group">
          <label>New Password</label>
          <input type="password" placeholder="New Password" />
        </div>
        <div className="input-group">
          <label>Repeat new Password</label>
          <input type="password" placeholder="repeat Password" />
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordSettings;
