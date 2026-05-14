import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    productId: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: true
    },

    reviewText: {
        type: String,
        required: true
    }

}, { timestamps: true });

const reviewModel =
    mongoose.models.review ||
    mongoose.model("review", reviewSchema);

export default reviewModel;