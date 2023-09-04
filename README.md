# React User Data App

This is a React application that fetches user data from the [RandomUser.me](https://randomuser.me/) API and displays the user's name and email address. You can also refresh the data to fetch a new user by clicking Refresh button.

# App Deployment Commands

git clone https://github.com/your-username/react-user-data.git
cd react-user-data
npm install
npm start
npm run deploy

## App Installation

1. Clone this repository:
git clone https://github.com/your-username/react-user-data.git

2. Change directory:
cd react-user-data

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open your browser and navigate to http://localhost:3000 to view the application.

6. Hosting the Application on GitHub Pages:
    a. Install the gh-pages package as a development dependency:
        npm install gh-pages --save-dev
    b. In your package.json file, add the following lines:
        "homepage": "https://your-username.github.io/react-user-data",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    c. Deploy Application
        npm run deploy

