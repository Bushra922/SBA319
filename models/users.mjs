import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Dates: {
        type: String,
        required: true
    },
    readyToRead: Boolean
});

const users= mongoose.model('users', usersSchema);

export default users;