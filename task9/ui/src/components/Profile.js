import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [userDetails, setUserDetails] = useState("");

  const client = axios.create({
    baseURL: "http://localhost:8000/user/profile",
  });

  useEffect(() => {
    myPrifile();
  }, []);

  const myPrifile = async () => {
    try {
      const auth_token = localStorage.getItem("auth_token");
      const response = await client.get("", {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });

      const user = response.data.user;
      setUserDetails(user);
    } catch (error) {
      console.error("Failed to fetch your profile:", error);
    }
  };

  return (
    <>
      <div className="profile">
        <h3>My profile</h3>
        <p>Username : {userDetails.username}</p>
        <p>Email : {userDetails.email}</p>
      </div>
    </>
  );
}
