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
      <div className="user-container">
      <h2>User Profile</h2>

      {error && <p className="error-message">{error}</p>}

      <table className="user-details-table">
          <tbody>
            <tr>
              <td>Full Name:</td>
              <td>{isEditing ? <input type="text" name="fullName" value={editedUser.fullName} onChange={handleInputChange} /> : user.fullName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{isEditing ? <input type="text" name="email" value={editedUser.email} onChange={handleInputChange} /> : user.email}</td>
            </tr>
            <tr>
              <td>Mobile Number:</td>
              <td>{isEditing ? <input type="text" name="teleno" value={editedUser.teleno} onChange={handleInputChange} /> : user.teleno}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{isEditing ? <input type="text" name="city" value={editedUser.city} onChange={handleInputChange} /> : user.city}</td>
            </tr>
          </tbody>
        </table>
        {isEditing ? (
          <> <br/>
            <button type="button-user" onClick={handleSaveEdit}>
              Save
            </button> 
            <br/><br/>
            <button type="button-user" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
          <br/>
            <button type="button-user" onClick={handleEditClick}>
              Edit
            </button> 
            <br/><br/>
            <button type="button-user" onClick={handleDeleteUser}>
              Delete
            </button>
          </>
        )}
   
    </div>
    </div>
  );
};

export default Userprofile;
