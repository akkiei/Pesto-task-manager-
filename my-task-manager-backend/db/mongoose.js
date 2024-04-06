const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

async function connect() {
  // Start the in-memory MongoDB server
  mongoServer = await MongoMemoryServer.create();

  // Get the URI of the in-memory database
  const mongoUri = mongoServer.getUri();

  // Connect Mongoose to the in-memory database
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  console.log(`Mongoose connected to in-memory MongoDB at ${mongoUri}`);
}

async function closeDatabase() {
  // Disconnect Mongoose
  await mongoose.disconnect();
  // Stop the in-memory MongoDB server
  await mongoServer.stop();

  console.log("Mongoose disconnected and in-memory MongoDB server stopped");
}

// For a real application, you might not want to connect to the in-memory database
// automatically. Instead, you can export the connect and closeDatabase functions
// and call them when needed, such as in your test setup and teardown.

module.exports = { connect, closeDatabase };
