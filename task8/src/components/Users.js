import { React } from "react";

function Users({ users }) {
  return (
    <>
      <div>
        <h1>User Listing Page</h1>
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

export default Users;
