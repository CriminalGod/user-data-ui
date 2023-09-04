# React User Data App

This is a React application that fetches user data from the [RandomUser.me](https://randomuser.me/) API and displays the user's name and email address. You can also refresh the data to fetch a new user by clicking Refresh button.

# App Deployment Commands

1. git clone https://github.com/your-username/react-user-data.git
2. cd react-user-data
3. npm install
4. npm start
5. npm run deploy

## App Installation

1. Clone this repository:
    a. git clone https://github.com/your-username/react-user-data.git

2. Change directory:
    a. cd react-user-data

3. Install dependencies:
    a. npm install

4. Start the development server:
    a. npm start

5. Open your browser and navigate to http://localhost:3000 to view the application.

6. Hosting the Application on GitHub Pages:
    a. Install the gh-pages package as a development dependency:
        1. npm install gh-pages --save-dev
    b. In your package.json file, add the following lines:
        1. "homepage": "https://your-username.github.io/react-user-data",
        2. "predeploy": "npm run build",
        3. "deploy": "gh-pages -d build",
    c. Deploy Application
        1. npm run deploy

