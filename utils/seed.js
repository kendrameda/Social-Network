const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});


  const users = [];

  const newUsers = await User.insertMany(users);

  console.log("newUsers: ", newUsers);

  await Thought.collection.insertOne({
    thoughtName: 'I had a dream in time gone by',
    users: [...newUsers.map(user => user._id )],
  });

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
