import mongoose from 'mongoose';

const chineseSignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 55,
    },
    years: {
        type: Number,
        required: true
    },
    readyToRead: Boolean
});

const chineseSign= mongoose.model('chineseSigns', chineseSignSchema);

export default chineseSign
;