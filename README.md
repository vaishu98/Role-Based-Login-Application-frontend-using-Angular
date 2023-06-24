# Simple Role based Login Application - frontend using Angular

This application provides a simple functionality for user registration and authentication. Users can sign up using the SignUp tab in the navigation bar, and they will be assigned the role ROLE_USER automatically. Additionally, there is an ROLE_ADMIN role that needs to be created manually in the database.

## Features

**User Registration:** Users can sign up for an account using the SignUp tab.

**User Authentication:** Users can log in to the application using the Login tab.

**Role-Based Access Control:** The application supports two roles - ROLE_USER and ROLE_ADMIN.

**JWT Token Authentication:** After validating the user's credentials, a JWT token is generated for subsequent request authentication.

**User Dashboard:** Accessible only to users with the ROLE_USER role.

**Admin Dashboard:** Accessible only to users with the ROLE_ADMIN role.


## Technology Stack:
The backend of the application is implemented using the following technologies:
The link to the backend project using Spring boot and SQL Database can be found here.
- https://github.com/vaishu98/BasicRoleBasedLoginApplication.git

**Spring Boot:** A Java framework for creating web applications.

**Java:** The programming language used for the backend development.

**JSON Web Tokens (JWT):** Used for authentication and authorization of requests.

**Database:** A database is required to store user information and roles.
Installation


## To run the application locally, please follow these steps:

- Clone the repository: git clone <repository-url>
- Navigate to the project directory: cd RBACLoginFrontend
- Install dependencies: npm install
- Configure the database: Set up a database and update the database configuration in the application.
- Create an admin user: Manually create an admin user in the database with the ROLE_ADMIN role.
- Build the project: npm run build
- Start the application: npm start
- Access the application in your browser: http://localhost:4200

## Usage

**Sign Up:** Click on the SignUp tab in the navigation bar and fill in the required information to create a new user account.

**Log In:** Click on the Login tab in the navigation bar and enter your credentials to log in to the application.

**User Dashboard:** Once logged in with the ROLE_USER role, you will have access to the user dashboard.

**Admin Dashboard:** To access the admin dashboard, log in with the ROLE_ADMIN role.

**Note:** The admin user with the ROLE_ADMIN role needs to be created manually in the database.

## Contribution

Contributions are welcome! If you find any issues or would like to add new features, feel free to submit a pull request.

Please ensure that your code adheres to the coding standards and is well-documented.

## License

This project is licensed under the MIT License.