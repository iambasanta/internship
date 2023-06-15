import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const client = axios.create({
    baseURL: "http://localhost:8000/auth/register",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      username.trim() !== "" ||
      email.trim() !== "" ||
      password.trim() !== ""
    ) {
      try {
        const response = await client.post("", { username, email, password });
        const auth_token = response.data.auth_token;

        localStorage.setItem("auth_token", auth_token);

        setUsername("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    }
  };

  return (
    <>
      <form className="form">
        <div className="input-box">
          <input
            className="input-field"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
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
        <button onClick={handleRegister} className="button">
          Register
        </button>
      </form>
    </>
  );
}
