import React, { FC, useState, Dispatch, SetStateAction } from "react";

interface RegisterModalProps {
  showRegister: Dispatch<SetStateAction<boolean>>;
}

const RegisterPage: FC<RegisterModalProps> = ({ showRegister }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Send username, email, password only
    console.log({
      username: form.username,
      email: form.email,
      password: form.password,
    });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">Create Account</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            required
          />

          <button type="submit" className="register-button">
            Register
          </button>
          <span className="or">OR</span>
          <button
            type="button"
            className="register-button"
            onClick={() => showRegister(false)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
