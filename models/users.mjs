import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true // Trim whitespace from both ends of the string
    },
    email: {
        type: String,
        required: true 
    },
    DOB: Number,
    readyToRead: Boolean
});

const User= mongoose.model('User', userSchema);

export default User;