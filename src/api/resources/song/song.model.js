import mongoose from 'mongoose';

const Schema = mongoose;
const songSchema = new Schema({
    tittle: {
        type: String,
        required: [true, 'SOng must have tittle'],
        url: {
            type: String,
            required: [true, 'Song must have url'],
        },
        rating: {
            type: Number,
            required: [true, 'Song must have rating'],
            default:0,
            min: 0,
            max: 5,
        }
    }
});

export default mongoose.model('Song', songSchema);