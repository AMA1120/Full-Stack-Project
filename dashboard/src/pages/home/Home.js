import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import "./home.css";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:4000/getusers")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleDelete = async (uname) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the user '${uname}'?`
    );
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/deleteusers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uname }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        // If deletion is successful,The table get reset
        const updatedUsers = users.filter((user) => user.uname !== uname);
        setUsers(updatedUsers);
        alert("succesfully Deleted the user!");
      } else {
        console.log("User not found.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        
        
        <div className="tbl-container">
          <h1>Registered customers</h1>
          <table className="user-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>User Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Telephone no</th>
                <th>Delete Customers</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullName}</td>
                  <td>{user.uname}</td>
                  <td>{user.city}</td>
                  <td>{user.email}</td>
                  <td>{user.teleno}</td>
                  <td>
                    <button
                      className="button2"
                      onClick={() => handleDelete(user.uname)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>This is the main content of your home page.</p>
      </div>
    </div>
  );
}

export default Home;
