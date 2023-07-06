import React from "react";
import { Link } from "react-router-dom";

const UserList = (props: {}) => {
  return (
    <div>
      <p>User list</p>
      <Link to="/users/detail">View User details</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default UserList;
