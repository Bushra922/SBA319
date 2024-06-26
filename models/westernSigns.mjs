import mongoose  from 'mongoose';

const westernSignsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dates: {
        type: String,
        required: true
    },
    readyToRead: Boolean
});

const westernSigns= mongoose.model('westernSigns', westernSignsSchema);

export default westernSigns;