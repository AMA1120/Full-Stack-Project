import React, { useState, useEffect } from 'react';
import './userprofile.css';
import Navbar from '../../components/Navbar/Navbar';

const Userprofile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    mobilenumber: '',
    city: '',
    orders: [
      { id: 1, date: '2023-01-15', total: 25.0 },
      { id: 2, date: '2023-02-03', total: 18.5 },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Make an API call to fetch user details
        const response = await fetch('http://localhost:4000/userprofile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token:window.localStorage.getItem("token") }),
          
          
        });

        if (response.ok) {
          const result = await response.json();
          setUser(result.data);
        } else {
          const result = await response.json();
          setError(result.error || 'Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('Failed to fetch user details');
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleSaveEdit = () => {
    // Add logic to save edited user details (e.g., make an API call)
    // Once saved, update the user state and exit edit mode
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <br />
      <h2>User Profile</h2>

      {error && <p className="error-message">{error}</p>}

      <form>
        <label>
          Username:
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={editedUser.uname}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.uname}</span>
          )}
        </label>

        <label>
          Email:
          {isEditing ? (
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </label>

        {/* Add similar sections for other user details like mobilenumber, city, etc. */}

        {isEditing ? (
          <>
            <button type="button" onClick={handleSaveEdit}>
              Save
            </button>
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default Userprofile;