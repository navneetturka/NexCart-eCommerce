import express from "express";

import {
    addReview,
    getReviews,
    deleteReview,
    updateReview
} from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/add", addReview);

reviewRouter.get("/:productId", getReviews);

reviewRouter.delete("/delete/:id", deleteReview);

reviewRouter.put("/update/:id", updateReview);

export default reviewRouter;