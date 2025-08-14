import { FC } from "react";
import Header from "../components/ui/Header";
import Avatar from "../assets/images/default-avatar.png";

const Settings: FC = () => {
  return (
    <div className="setting-page">
      <Header title="Setting" />
      <div className="setting-content">
        <aside className="sidebar">
          <ul>
            <li className="active">Profile Settings</li>
            <li>Password</li>
            <li>Notifications</li>
            <li>Verification</li>
          </ul>
        </aside>
        <main className="content">
          <div className="avatar-section">
            <img src={Avatar} alt="Avatar" className="avatar" />
            <div className="avatar-buttons">
              <button className="btn-primary">Upload New</button>
              <button className="btn-secondary">Delete avatar</button>
            </div>
          </div>

          <form className="profile-form">
            <div className="row">
              <div className="input-group">
                <label>First Name *</label>
                <input type="text" placeholder="First name" />
              </div>
              <div className="input-group">
                <label>Last Name *</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="examples@gmail.com" />
              </div>
              <div className="input-group">
                <label>Mobile Number *</label>
                <div className="phone-input">
                  <span className="flag">🇳🇬</span>
                  <input type="tel" placeholder="0806 123 7890" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Gender</label>
                <div className="gender-options">
                  <label>
                    <input type="radio" name="gender" /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" /> Female
                  </label>
                </div>
              </div>
              <div className="input-group">
                <label>ID</label>
                <input type="text" placeholder="1559 000 7788 8DER" disabled />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Tax Identification Number</label>
                <input type="text" placeholder="1234567890" />
              </div>
              <div className="input-group">
                <label>Tax Identification Country</label>
                <select>
                  <option>Nigeria</option>
                </select>
              </div>
            </div>

            <div className="input-group full-width">
              <label>Residential Address</label>
              <textarea placeholder="Ib street orogun ibadan"></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Settings;
