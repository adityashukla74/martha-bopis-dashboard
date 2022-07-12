# Bopis Dashboard

This is the Next JS application running with React 16 version.
NOTE : React 17 adn 18 are not supported at the moment.

## Pages
It contains the following pages -

- /account/login - public page for logging into the Next.js app.
- /account/register - public page for registering a new user account with the app.
- / - secure home page containing a simple welcome message to the logged in user.
- /users - secure page displaying a list of all users in the Next.js app, with options to add, edit or delete users.
- /users/add - secure page for adding a new user.
- /users/edit/[id] - secure page for editing an existing user.

## Routes Restrictions
Secure pages are protected by the authCheck() function of app Component which redirects unauthenticated users to the login page.

## EndPoints

- /api/users/authenticate - POST - public route for authenticating username and password and generating a JWT token.
- /api/users/register - POST - public route for registering a new user with the Next.js app.
- /api/users - GET - secure route that returns all users.
- /api/users/[id] - GET - secure route that returns the user with the specified id.
- /api/users/[id] - PUT - secure route for updating a user.
- /api/users/[id] - DELETE - secure route for deleting a user.

## JWT

Secured routes require the valid JWT tokens in the http Authorization header of the request. 

## Saving Data
Currently storing User's data in a JSON for simplification at this location - /data/users.json
The data is being managed & accessed via fetch wrapper in helpers.

## Login Form
To implement login form, we are using - React Hook Form Library. (via npmjs)

## RxJS
Rxjs subjects and observables are used by the user service to store the current user state and communicate between different components in the application.

## Steps to Run the Application
Use React 16
- nvm use 16.14.1

Build the application using 
- npm run build

Run the application
- npx next dev -p 2000