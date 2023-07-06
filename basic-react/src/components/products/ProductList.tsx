import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props: {}) => {
  return (
    <div>
      <p>Products listing page</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductList;
