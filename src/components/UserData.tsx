import React, { useState, useEffect } from "react";
import axios from "axios";

const UserData: React.FC = () => {
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      const { name, email } = response.data.results[0];
      setUserData({ name: `${name.first} ${name.last}`, email });
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <button onClick={fetchUserData}>Refresh</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UserData;
