import React, {useState} from 'react'
import './userprofile.css'
import Navbar from "../../components/Navbar/Navbar";


const Userprofile = () => {
// Example user data
  const [user, setUser] = useState({
    username: '',
    email: '',
    mobilenumber:'',
    city:'',
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


// Function to handle form submission for user details
  const handleSubmit = (e) => {
    e.preventDefault();
// add logic to update user details on the server
// For simplicity, update the local state
    setUser({ ...editedUser });
    setIsEditing(false);
  };

// Function to handle deleting the user profile
// const UserProfile = () => {
//   const [user, setUser] = useState({
//     // Initialize with default user data
//     username: '',
//     email: '',
//     mobilenumber: '',
//     city: '',
//   });

//   const [token, setToken] = useState(''); // Token received after login
// const fetchUserProfile = async () => {
//   try {
//     const response = await fetch('/userprofile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ token }),
//     });

//     if (response.ok) {
//       const result = await response.json();
//       if (result.status === 'ok') {
//         setUser(result.data);
//       } else {
//         console.error('Error fetching user profile:', result.data);
//       }
//     } else {
//       console.error('Failed to fetch user profile');
//     }
//   } catch (error) {
//     console.error('Error fetching user profile:', error.message);
//   }
// };

// const handleDeleteProfile = async () => {
//   try {
//     const response = await fetch('/deleteuser', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ token }),
//     });

//     if (response.ok) {
//       const result = await response.json();
//       if (result.status === 'ok') {
//         console.log(result.message);
//         // Optionally, you can perform additional actions after deletion
//       } else {
//         console.error('Error deleting user profile:', result.data);
//       }
//     } else {
//       console.error('Failed to delete user profile');
//     }
//   } catch (error) {
//     console.error('Error deleting user profile:', error.message);
//   }
// };


// Function to handle canceling the edit
  const handleCancelEdit = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
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


          <button className="edit-profile-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
          <br></br> <br></br>
          <button className="delete-profile-button" onClick={() => setIsEditing(true)}>Delete Profile</button>   
        </div>
      )}
    </div>
  );
};

export default Userprofile;