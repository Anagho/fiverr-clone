import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
 gigId: {
    type: String,
    required: true,
 }
}, {
    timestamps: true
});

export default mongoose.model("Review", reviewSchema)