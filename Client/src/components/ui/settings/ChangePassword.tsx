import { FC, useState } from "react";
import Loading from "../../common/loader/Loading";

const ChangePasswordSettings: FC = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const handleClearInput = (): void => {
    setForm({
      email: "",
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (form.newPassword !== form.repeatNewPassword) {
      alert("New passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(
        "http://localhost:3000/api/auth/change-password",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            email: form.email,
            oldPassword: form.oldPassword,
            newPassword: form.newPassword,
          }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        alert("Password changed successfully!");
        handleClearInput();
      } else {
        alert(data.error || "Password change failed");
      }
    } catch (error) {
      console.error("Password change error:", error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <form className="passwordReset-form" onSubmit={handleSubmit}>
      <div className="column">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="examples@gmail.com"
            value={form.email}
            onChange={handleChange}
            name="email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            placeholder="Password"
            id="oldPassword"
            name="oldPassword"
            value={form.oldPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            placeholder="New Password"
            id="newPassword"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="repeatPassword">Repeat new Password</label>
          <input
            type="password"
            placeholder="repeat Password"
            id="repeatPassword"
            name="repeatNewPassword"
            value={form.repeatNewPassword}
            onChange={handleChange}
            required
          />
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
