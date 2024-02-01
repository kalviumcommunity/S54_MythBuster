const mongoose = require('mongoose');
require("dotenv").config()

let mongoConnection;

async function startDatabase() {
  if (mongoConnection) return;

  const mongoUri = process.env.mongoUri;

  mongoConnection = await mongoose.connect(mongoUri);

  console.log('Connected to local MongoDB database.');
}

async function stopDatabase() {
  if (!mongoConnection) return;

  await mongoConnection.close();
  mongoConnection = null;

  console.log('Disconnected from local MongoDB database.');
}

function isConnected() {
  return mongoConnection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
