import mongoose from "mongoose";

let mongoConnection;

async function ConnectToDB() {
  if (mongoConnection) return;

  const mongoUri = process.env.MONGO_URI;

  mongoConnection = await mongoose.connect(mongoUri);

  console.log('Connected to MongoDB database.');
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

export { ConnectToDB, stopDatabase, isConnected };
