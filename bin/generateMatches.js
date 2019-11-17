require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/christmasGifter';

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newGifters = [
  { name: 'Matt', doNotMatchWith: ['Katharine', 'Matt'] },
  { name: 'Katharine', doNotMatchWith: ['Katharine', 'Matt'] },
  { name: 'Alex', doNotMatchWith: ['Alex', 'Angela'] },
  { name: 'Angela', doNotMatchWith: ['Alex', 'Angela'] },
  { name: 'Keith', doNotMatchWith: ['Keith', 'Gina'] },
  { name: 'Gina', doNotMatchWith: ['Keith', 'Gina'] },
  { name: 'Nicole', doNotMatchWith: [] },
];

const run = async () => {
  //Remove all gifters
  const oldGifters = await db.Gifter.find();
  for (const gifter of oldGifters) {
    console.log('deleting gifter', gifter);
    await gifter.remove();
  }
  console.log('Deleted all gifters');
  for (const newGifter of newGifters) {
    console.log('creating gifter', newGifter);
    await db.Gifter.create(newGifter);
  }
  console.log('Created new gifters');

  const currentGifters = await db.Gifter.find();
  //create list of recipients
  let recipients = currentGifters.map(g => g.name);
  //randomly select recipient for each gifter
  for (const gifter of currentGifters) {
    const possibleMatches = recipients.filter(
      recipient => !gifter.doNotMatchWith.includes(recipient)
    );
    if (possibleMatches.length === 0) {
      console.log('No matches for gifter.  Re-run script.');
    }
    const index = Math.floor(Math.random() * possibleMatches.length);

    const match = possibleMatches[index];
    recipients = recipients.filter(recipient => recipient !== match);
    await db.Gifter.updateOne({ _id: gifter._id }, { match });
    console.log(gifter.name, 'Matched');
  }
};

run();
