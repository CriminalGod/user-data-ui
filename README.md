# React User Data App

This is a React application that fetches user data from the [RandomUser.me](https://randomuser.me/) API and displays the user's name and email address. You can also refresh the data to fetch a new user by clicking Refresh button.

## App Deployment Commands
```bash
git clone https://github.com/CriminalGod/user-data-ui.git
cd react-user-data
npm install
npm start
npm run deploy
```

## App Installation

1. Clone this repository:
```bash
git clone https://github.com/CriminalGod/user-data-ui.git
```

2. Change directory:
```bash
cd react-user-data
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to http://localhost:3000 to view the application.

6. Hosting the Application on GitHub Pages:
  - Install the gh-pages package as a development dependency:
```bash
npm install gh-pages --save-dev
```
  - In your package.json file, add the following lines:
```
"homepage": "https://your-username.github.io/react-user-data",
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
``````
  - Deploy Application
```bash
npm run deploy
```

