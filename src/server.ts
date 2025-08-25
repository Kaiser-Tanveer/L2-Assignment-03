import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';

let server: Server;
const PORT: number = 5000;

async function main() {
  try {
    await mongoose.connect('mongodb+srv://library_management_user:library_management_password@cluster0.fuozxdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    console.log('✅ Connected to MongoDB with Mongoose');

    server = app.listen(PORT, () => {
      console.log(` Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(' Error starting the server:', error);
  }
}

main();