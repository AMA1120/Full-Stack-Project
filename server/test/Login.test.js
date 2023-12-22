// login.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../your-express-app'); // Import your Express app instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('Login Component', () => {
  it('should return status 200 and a token on successful login', async () => {
    const response = await chai
      .request(app)
      .post('/login-users')
      .send({
        uname: 'testUsername',
        password: 'testPassword',
      });

    expect(response).to.have.status(200);
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.be.a('string'); // Assuming your token is a string

    // You can add more assertions based on your API response
  });

  it('should handle invalid credentials', async () => {
    const response = await chai
      .request(app)
      .post('/login-users')
      .send({
        uname: 'invalidUsername',
        password: 'invalidPassword',
      });

    expect(response).to.have.status(401);

    // You can add more assertions based on your API response
  });
});
