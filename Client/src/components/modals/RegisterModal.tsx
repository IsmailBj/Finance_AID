import React, { FC, useState } from "react";
import Loading from "../common/loader/Loading";
import { RegLogProps } from "../../types/types";

const RegisterPage: FC<RegLogProps> = ({ showRegister }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleClearInput = (): void => {
    setForm({
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (form.password !== form.repeatPassword) {
      alert("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful! You can now log in.");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      showRegister(false);
    }
    handleClearInput();
  };

  return loading ? (
    <Loading />
  ) : (
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
