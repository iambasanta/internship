import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'john@email.com'
    }
  ]);

  const addUser = (user) => {
    console.log("adding user");
    const newUser = {
      id: Math.floor(Math.random()),
      name: user.name,
      email: user.email,
    };
    setUsers([...users, newUser]);
  };

  console.log(users);

  return (
    <>
      <Routes>
        <Route exact path="/users" element={<Users users={users} />} />
        <Route path="/register" element={<Register addUser={addUser} />} />
      </Routes>
    </>
  );
}

export default App;
