import { FC, useState } from "react";
import Loading from "../components/common/loader/Loading";

const LandingPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
    handleClearInput();
  };

  const handleClearInput = () => {
    setUsername("");
    setPassword("");
    setLoading(true);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        {loading ? (
          <Loading />
        ) : (
          <form className="login-form" onSubmit={(e) => handleLogin(e)}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="Enter your username"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
