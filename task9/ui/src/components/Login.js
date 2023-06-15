import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const client = axios.create({
    baseURL: "http://localhost:8000/auth/login",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() !== "" || password.trim() !== "") {
      try {
        const response = await client.post("", { email, password });
        const auth_token = response.data.auth_token;

        localStorage.setItem("auth_token", auth_token);

        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <>
      <form className="form">
        <div className="input-box">
          <input
            className="input-field"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="input-box">
          <input
            className="input-field"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>
        <button onClick={handleLogin} className="button">
          Login
        </button>
      </form>
    </>
  );
}
