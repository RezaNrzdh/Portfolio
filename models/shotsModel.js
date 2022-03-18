import mongoose from 'mongoose';

const shotsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createAt: {
        type: Number
    },
    images: {
        type: Array
    },
    description: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array
    },
    tags: {
        type: Array
    },
    slug: {
        type: String
    }
});

export default mongoose.models.Shots || mongoose.model('Shots', shotsSchema);