import mongoose from "mongoose";


// connect to MongoDB using mongoose
export const connectDB = async () => {
  try {

    // connect using MONGO_URI from environment varialbes
    await mongoose.connect(process.env.MONGO_URI);

    console.log("CONNECTED TO MONGODB SUCCESSFYLLY!");
  } catch (err) {
    // log error and exit process if connection fails
    console.log("Error connect to Mongodb ->", err);
    process.exit(1);
  }
};
