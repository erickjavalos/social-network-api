const db = require('../config/connection');
const { User, Thought } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Thought.create(thoughtSeeds);
  }
  catch (err) {
    console.log(err)
    process.exit(0);
  }

  console.log('Successfully loaded all data!');
  process.exit(0);
});
