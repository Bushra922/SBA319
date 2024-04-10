import mongoose from 'mongoose';

const chineseSignsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Years: {
        type: String,
        required: true
    },
    readyToRead: Boolean
});

const chineseSigns= mongoose.model('chineseSigns', chineseSignsSchema);

export default chineseSigns
;