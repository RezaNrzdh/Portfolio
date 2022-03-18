import mongoose from 'mongoose';
const DB = process.env.MONGODB_URI;

const options = {
    bufferCommands: false
}

const dbConnect = () => {
    return mongoose.connect(DB, options);
}

export default dbConnect;