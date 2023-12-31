# Full-Stack-Project
Restaurant  Ordering System

The Restaurant Ordering System is a complete solution made to improve and speed up the process of ordering for customers and restaurant managers equally. The system provides a user-friendly interface for customers to browse menus and place orders by utilizing an innovative full-stack architecture. Administrative staff at restaurants can update menus, manage users, and keep an eye on overall business performance with the help of an effective dashboard.


# Install Dependencies and run the project


**For Frontend** - `cd client` `npm i` `npm start`

**For admin Dashboard** - `cd dashboard` `npm i` `npm start`

**For Backend** - `cd server` `npm i` `npm start`



# Technologies Used:
**Frontend**: React.js
**Backend**: Node.js, Express.js
**Database**: MongoDB
**Testing**: Jest, Cypress
**Containerization**: Docker


# File structure:


```
.
└── Full-Stack-Project-main
    |
    ├──.github\work
    |     ├──docker-compose-image.yml   // Docker Compose file for building Docker images
    |     └──testing.yml                // Testing workflow configuration file
    |
    ├── client                          // Frontend directory for the client-side application
    |   ├── cypress                    // Directory for end-to-end testing using Cypress
    |   ├── public                     // Public assets and static files
    |   |  
    |   ├── src 
    |   |    ├──components             // Frontend components (e.g., Navbar, Footer)
    |   |    ├──Images                 // Images used in the frontend
    |   |    └──pages                  // Frontend pages
    |   |
    |   ├── cypress.congig             // Cypress configuration file
    |   ├── Dockerfile                 // Docker configuration file for building the client image
    |   ├── jest.config.js             // Jest configuration file for frontend testing
    |   ├── package-lock.json
    |   ├── package.json
    |   └──.gitignore                  // Gitignore file to specify files and directories to be ignored by Git
    |
    ├── dashboard                       // Admin dashboard directory
    |   ├── public
    |   ├── src
    |   |    ├──components             // Components for the admin dashboard
    |   |    └──pages                  // Admin dashboard pages
    |   |    
    |   ├── Dockerfile                 // Docker configuration file for building the dashboard image
    |   ├── .gitignore                 // Gitignore file for the dashboard
    |   ├── package-lock.json
    |   └── package.json
    |    
    |   
    ├── server                          // Backend server directory
    |   ├── models                     // Database models
    |   ├── routes                     // API routes
    |   ├── test                       // Test files for server testing
    |   ├── .dockerignore              // Dockerignore file for excluding files from Docker build
    |   ├── .gitignore                 // Gitignore file for the server
    |   ├── app.js                     // Main application file
    |   ├── Dockerfile                 // Docker configuration file for building the server image
    |   ├── server.js                  // Server entry point
    |   ├── package-lock.json
    |   └── package.json
    |   
    |
    |
    ├── docker-compose.yml             // Docker Compose file for defining services, networks, and volumes
    └── README.md                       // Readme file providing information about 
```