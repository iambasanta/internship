import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ addUser, users }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" || email.trim() !== "") {
      addUser({ name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <>
      <button onClick={() => navigate("/users")}>View users</button>
      <div>Register page</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>

      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Register;
