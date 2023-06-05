import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "🚀 *** file: db.js:6 *** connectDB *** conn:",
      conn.connection.host
    );
  } catch (error) {
    console.log(
      "🚀 *** file: db.js:11 *** connectDB *** error:",
      error.message
    );
    process.exit(1);
  }
};
