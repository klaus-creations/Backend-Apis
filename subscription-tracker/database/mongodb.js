import mongoose from "mongoose";

import { NODE_ENV, DB_URI } from "../config/env";

if (!DB_URI) {
  throw new Error(
    "please create your database uri inside the .env.<development/production>.local"
  );
}

const connectDB = async function () {
  try {
    await mongoose.connect(DB_URI);
    console.log(`database connected successfully in ${NODE_ENV} mode`);
  } catch (error) {
    console.log(
      "Error while trying to connect to the database".error.message || error
    );
    process.exit(1);
  }
};

export default connectDB;
