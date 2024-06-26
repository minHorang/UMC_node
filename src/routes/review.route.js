import express from "express";
import asyncHandler from "express-async-handler";
import { myReview, reviewRegister } from "../controllers/review.controller.js";

export const reveiwRouter = express.Router();

reveiwRouter.post("/add", asyncHandler(reviewRegister));
reveiwRouter.get("/my", asyncHandler(myReview));
