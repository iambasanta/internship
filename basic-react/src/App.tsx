import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import ProductList from "./components/products/ProductList";
import UserDetail from "./components/users/UserDetail";
import UserList from "./components/users/UserList";

function App() {
  return (
    <div>
      <Link to="users">Users</Link>
      <br />
      <Link to="products">Products</Link>
      <br />
      <Link to="counter">Counter</Link>

      <Routes>
        <Route path="users">
          <Route index={true} element={<UserList />} />
          <Route path="detail" element={<UserDetail />} />
        </Route>

        <Route path="products" element={<ProductList />}></Route>

        <Route path="counter" element={<Counter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
