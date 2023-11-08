## Demo
Check out the live demo of the app [here](http://144.172.113.66:5000/).

## How to run app
To run the app and follow the instructions provided, you will need the following necessary software and dependencies: 

1. Node.js: Make sure you have Node.js installed on your machine. You can download it from the official Node.js website (https://nodejs.org) and follow the installation instructions for your operating system.

2. Git: You will need Git installed to clone the app repository. You can download Git from the official Git website (https://git-scm.com) and follow the installation instructions for your operating system.

Once you have Node.js and Git installed, you can proceed with the steps mentioned earlier:

1. Clone the app repository to your local machine using the command: `git clone <repository-url>`
2. Rename the `.env.local.example` file to `.env.local` and update the URL to point to port 5001.
3. Install the necessary dependencies by running the command: `npm install`
4. Run project:
    - Start the app by running the command: `npm start`
    - In another command line interface, start the server by running the command: `npm run server`
    - OR you can run both commands at the same time with one command: `npm run mix`
7. Use the provided username "admin" and password "123456" to log in to the app.

### Changing the server port
To modify the server port, follow these steps:
1. Navigate to the backend directory.
2. Locate the `index.js` file.
3. Open the `index.js` file using a text editor of your choice.
4. In the file, go to line 299.
5. You can change the server port on this line as needed.