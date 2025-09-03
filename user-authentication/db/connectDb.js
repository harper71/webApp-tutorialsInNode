import mongoose from "mongoose";


const connectDb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    process.stdout.write('connected .....\n');
  } catch (error) {
    process.stderr.write(error);
  }
}

export default connectDb;