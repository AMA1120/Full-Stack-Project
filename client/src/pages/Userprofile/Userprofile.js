import React, { useState, useEffect } from 'react';
import './userprofile.css';
import Navbar from '../../components/Navbar/Navbar';

const Userprofile = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    teleno: '',
    city: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:4000/userprofile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: window.localStorage.getItem('token') }),
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
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/updateuser/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: window.localStorage.getItem('token'),
          updatedUserDetails: editedUser,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'ok') {
          setUser(result.data);
          setIsEditing(false);
        } else {
          setError(result.message || 'Failed to update user details');
        }
      } else {
        const result = await response.json();
        setError(result.error || 'Failed to update user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      setError('Failed to update user details');
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch('http://localhost:4000/deleteUser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: window.localStorage.getItem('token') }),
      });

      if (response.ok) {
        console.log('User deleted successfully');
      } else {
        const result = await response.json();
        setError(result.error || 'Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user');
    }
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
          Full Name:
          {isEditing ? (
            <input
              type="text"
              name="fullName"
              value={editedUser.fullName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.fullName}</span>
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

        <label>
          Mobile Number:
          {isEditing ? (
            <input
              type="text"
              name="teleno"
              value={editedUser.teleno}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.teleno}</span>
          )}
        </label>

        <label>
          City:
          {isEditing ? (
            <input
              type="text"
              name="city"
              value={editedUser.city}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.city}</span>
          )}
        </label>

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
          <>
            <button type="button" onClick={handleEditClick}>
              Edit
            </button>
            <button type="button" onClick={handleDeleteUser}>
              Delete
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Userprofile;
