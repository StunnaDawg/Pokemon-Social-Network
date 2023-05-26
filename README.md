
# Pokemon-Social-Network

## Description 
The Pokemon Social Network is an application that is used to create thought posts, add friends, and creating reactions to other trainers thoughts surrounding a Pokemon theme. This application utilizes mongooose to dynamically create a MongoDB database with express. During the process of building this application I learned how to utilize a NoSQL database as well as an ODM like mongoose. During Development I struggled with creating the subdocuments for friends and reactions for their respective models. Adding the ability to create and delete them was another challenge within itself, though I figured out how to create the correct controllers to utilize them within my application.

## Future Development

For future development I plan on cleaning up the the friends array as it currently shows all of the friends data. The friends array should only show the users username! 

## Installation

1. Git clone the repository using the following command: git clone git@github.com:StunnaDawg/Pokemon-Social-Network.git
2. Through the CLI cd into the Pokemon-Social-Network directory
4. Make sure to have nodejs(https://nodejs.org/) and MongoDB(https://www.mongodb.com/try/download/shell) installed
3. Ensure to 'npm install' all the dependencies
4. Ensure you have MongoDB(https://www.mongodb.com/try/download/shell) set up
5. Run the command 'node seeds' to seed the database with the dummy data provided. You can also make your own!
6. Run the command 'node index.js' to start the server on the local host
7. Utilize the application Insomnia(https://insomnia.rest/download) to GET, POST, PUT, DELETE the data from the database
    - If you do not have Insomnia downloaded follow the link (https://insomnia.rest/download)
    - An example get request would be as follows http://localhost:3001/api/users/

## Usage

Upon downloading the application make sure you do the following:
- run 'npm install' so that the dependcies are installed
  - If the dependencies do not exist: run 'npm i express', 'npm i mongoose', 'npm i moment'' to download the latest version of each npm
- run 'node utils/seed.js' to seed the database
- run 'node index.js' to start the local server

## Screenshots

![Alt](./images/Screenshot%202023-05-25%20at%2010.59.22%20PM.png)
![Alt](./images/Screenshot%202023-05-25%20at%2011.01.37%20PM.png)

## Demo Video Link

https://watch.screencastify.com/v/OmCsE2gWv6Ip0qVqx44u 

## Dependencies 

- nodeJS: https://nodejs.org/en
- mysql2: https://www.mongodb.com 
- express: https://www.npmjs.com/package/express 
- mongoose: https://mongoosejs.com/
- moment: https://www.npmjs.com/package/moment

