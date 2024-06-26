import express from "express";
import expressAsyncHandler from "express-async-handler";
import { storeAdd } from "../controllers/store.controllers.js";

export const storeRouter = express.Router();

storeRouter.post("/add", expressAsyncHandler(storeAdd));
