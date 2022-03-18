import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    name: {
        type: String,
        required: false
    },
    createAt: {
        type: Number,
        required: true,
        default: new Date(Date.now())
    },
    attempt: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    role: {
        type: Number,
        default: 1
    }
});

// Hash password before save in DB
UserSchema.pre('save', async function(next) {

    if(!this.isModified('password')){
        return next();
    }
    
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Compare current password and correct password in DB
UserSchema.methods.comparePassword = async function(reqPass, correctPass) {
    return await bcrypt.compare(reqPass, correctPass);
};

export default mongoose.models.Users || mongoose.model('Users', UserSchema);