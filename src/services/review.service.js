import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addReview } from "../models/review.dao.js";

export const joinReview = async (body) => {
  const joinReviewData = await addReview({
    store_id: body.store_id,
    score: body.score,
    body: body.body,
  });

  if (joinReviewData == -1) {
    throw new BaseError(status.STORE_DONT_EXIST);
  }
};
