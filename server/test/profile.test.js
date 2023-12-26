const request = require('supertest');
const app = require('../app');  // Assuming this is the path to your Express app

// Import your User model
const User = require('../models/users');  // Adjust the path accordingly


// Sample user data for testing
const testUser = {
  uname: 'testuser',
  // Add other user profile properties as needed
};

// Store the token for authentication
let authToken;

// Set up the test environment
before(async () => {

  // Create a test user
  await User.create(testUser);

  // Obtain an authentication token
  const loginResponse = await request(app)
    .post('/api/login')  // Assuming your login route is defined in /api/login
    .send({ username: testUser.uname, password: 'testpassword' })
    .expect(200);

  authToken = loginResponse.body.data;
});

// Clean up the test environment
after(async () => {
  // Delete the test user
  await User.deleteOne({ uname: testUser.uname });

  // Disconnect from the test database
  await mongoose.connection.close();
});

describe('User Profile Integration Tests', () => {
  it('should retrieve user profile with valid token', async () => {
    await request(app)
      .post('/api/userprofile')
      .send({ token: authToken })
      .expect(200)
      .then((response) => {
        assert.strictEqual(response.body.status, 'ok');
        assert.strictEqual(response.body.data.uname, testUser.uname);
        // Add more assertions based on your user profile structure
      });
  });

  it('should delete user with valid token', async () => {
    await request(app)
      .delete('/api/deleteuser')
      .send({ token: authToken })
      .expect(200)
      .then((response) => {
        assert.strictEqual(response.body.status, 'ok');
        assert.strictEqual(response.body.message, 'User deleted successfully');
      });
  });

  // Add more integration tests as needed for other functionalities
});
