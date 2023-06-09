import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    {
      name: "John Doe",
      email: "john@email.com",
    },
  ]);

  const addUser = (user) => {
    const newUser = {
      id: Math.floor(Math.random()),
      name: user.name,
      email: user.email,
    };
    setUsers([...users, newUser]);
  };

  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={<Register addUser={addUser} users={users} />}
        />
        <Route path="/users" element={<Users users={users} />} />
      </Routes>
    </>
  );
}

export default App;
