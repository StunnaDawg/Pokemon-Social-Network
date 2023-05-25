const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { getRandomThought, getRandomUsername, getRandomEmail} = require('./data')

console.time('seeding');

connection.once('open', async () => {
    console.log('connected');
    await Thoughts.deleteMany({});
    await User.deleteMany({});

    const thoughts = getRandomThought(20);
  
    let userSet = new Set();
    let emailSet = new Set();

    let users = [];

    for (let i = 0; i < 30; i++) {
    let username = getRandomUsername();
    let email = getRandomEmail();
  
  // Ensure unique usernames
    while (userSet.has(username)) {
        username = getRandomUsername();
    }

  // Ensure unique emails
    while (emailSet.has(email)) {
        email = getRandomEmail();
    }

    userSet.add(username);
    emailSet.add(email);

    users.push({
        username,
        email
    });
}
  
    await User.collection.insertMany(users);
    await Thoughts.collection.insertMany(thoughts);
  
    // loop through the saved applications, for each application we need to generate a application response and insert the application responses
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  