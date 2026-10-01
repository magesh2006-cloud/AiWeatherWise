const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/weatherwise');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    const servers = error.reason?.servers;
    if (servers) {
      for (const [host, server] of servers) {
        console.error(`MongoDB server ${host}: ${server.error?.message || server.type}`);
      }
    }
    process.exit(1);
  }
};

module.exports = connectDB;
