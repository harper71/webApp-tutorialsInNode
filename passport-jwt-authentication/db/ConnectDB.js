import mongoose from "mongoose";

const conectDb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected.... ");

  } catch (error) {
    console.error(error);
  }
}

export default conectDb
