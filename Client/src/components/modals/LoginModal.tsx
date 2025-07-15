import { FC, useState, Dispatch, SetStateAction } from "react";
import Loading from "../common/loader/Loading";
import { useNavigate } from "react-router-dom";

interface RegisterModalProps {
  showRegister: Dispatch<SetStateAction<boolean>>;
}

const LoginModal: FC<RegisterModalProps> = ({ showRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
    handleClearInput();
  };

  const handleClearInput = (): void => {
    setUsername("");
    setPassword("");
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <h1 className="login-title">Welcome Back</h1>
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
        <span className="or">OR</span>
        <button
          type="button"
          className="register-button"
          onClick={() => showRegister(true)}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default LoginModal;
