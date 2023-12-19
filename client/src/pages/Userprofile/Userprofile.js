import React, {useState} from 'react'
import './userprofile.css'
import Navbar from "../../components/Navbar/Navbar";


const Userprofile = () => {
// Example user data
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    mobilenumber:'071-4563857',
    city:'Colombo',
    orders: [
      { id: 1, date: '2023-01-15', total: 25.0 },
      { id: 2, date: '2023-02-03', total: 18.5 },
// Add more order details as needed
    ],
  });

// State for editing mode
  const [isEditing, setIsEditing] = useState(false);

// State for form fields
  const [editedUser, setEditedUser] = useState({ ...user });

// State for changing password
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

// Function to handle form submission for user details
  const handleSubmit = (e) => {
    e.preventDefault();
// Here, you can add logic to update user details on the server
// For simplicity, we'll just update the local state
    setUser({ ...editedUser });
    setIsEditing(false);
  };

// Function to handle canceling the edit
  const handleCancelEdit = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

// Function to handle form submission for changing password
  const handleChangePassword = (e) => {
    e.preventDefault();
// Here, you can add logic to update the password on the server
// For simplicity, we'll just log the new password to the console
    console.log('New password:', password);
// Clear the password fields after submission
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
    <Navbar/><br></br>
      <h2>User Profile</h2>
      {isEditing ? (
// Display the form for editing user details
        <form onSubmit={handleSubmit}>

          <label>
            Username:
            <input
              type="text"
              value={editedUser.username}
              onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
            />
          </label>

          <label>
            Mobile Number:
            <input
              type="text"
              value={editedUser.mobilenumber}
              onChange={(e) => setEditedUser({ ...editedUser, mobilenumber: e.target.value })}
            />
          </label>

          <label>
            City:
            <input
              type="text"
              value={editedUser.city}
              onChange={(e) => setEditedUser({ ...editedUser, city: e.target.value })}
            />
          </label>

{/* Add more form fields for additional user details */}
          <br />
          <button type="submit">Save Changes</button>
          <br></br>
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
          <br></br>
        </form>
      ) : (

// Display user details in non-edit mode
        <div>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mobilenumber:</strong> {user.mobilenumber}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          
{/* Display the order history */}
          {/* <div>
            <h3>Order History</h3>
            <ul>
              {user.orders.map((order) => (
                <li key={order.id}>
                  Order #{order.id} - Date: {order.date}, Total: ${order.total}
                </li>
              ))}
            </ul>
          </div> */}


          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          <br></br> <br></br>
          <button onClick={() => setIsEditing(true)}>Delete Profile</button>   
        </div>
      )}
    </div>
  );
};

export default Userprofile;