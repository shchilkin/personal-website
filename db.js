const mongoose = require("mongoose");
const db = process.env.MONGO_DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB ERROR", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
