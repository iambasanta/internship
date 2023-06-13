import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000";

function App() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) {
    return <div>No data to fetch!</div>;
  }

  return (
    <div className="">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            (id:{product.id}){product.name} [price: {product.price}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
