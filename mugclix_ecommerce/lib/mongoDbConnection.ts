import mongoose from 'mongoose';






export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // You can handle errors here or throw them to be caught in your API code
    throw error;
  }
};
