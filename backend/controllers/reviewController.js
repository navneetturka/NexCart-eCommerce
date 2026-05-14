import reviewModel from "../models/reviewModel.js";


// ADD REVIEW

const addReview = async (req, res) => {

    try {

        const { productId, userName, rating, reviewText } = req.body;

        const newReview = new reviewModel({
            productId,
            userName,
            rating,
            reviewText
        });

        await newReview.save();

        res.json({
            success: true,
            message: "Review Added"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });
    }
};



// GET PRODUCT REVIEWS

const getReviews = async (req, res) => {

    try {

        const { productId } = req.params;

        const reviews = await reviewModel.find({ productId });

        res.json({
            success: true,
            reviews
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });
    }
};



// DELETE REVIEW

const deleteReview = async (req, res) => {

    try {

        await reviewModel.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Review Deleted"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });
    }
};



// EDIT REVIEW

const updateReview = async (req, res) => {

    try {

        const { userName, rating, reviewText } = req.body;

        await reviewModel.findByIdAndUpdate(
            req.params.id,
            {
                userName,
                rating,
                reviewText
            }
        );

        res.json({
            success: true,
            message: "Review Updated"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });
    }
};

export {
    addReview,
    getReviews,
    deleteReview,
    updateReview
};