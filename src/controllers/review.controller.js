import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { searchMyReview } from "../providers/review.provider.js";

import { joinReview } from "../services/review.service.js";

export const reviewRegister = async (req, res, next) => {
  console.log("리뷰 등록 요청");
  console.log("body:", req.body);

  res.send(response(status.SUCCESS, await joinReview(req.body)));
};

export const myReview = async (req, rew, next) => {
  console.log("내가 작성한 리뷰");

  return res.send(response(status.SUCCESS, await searchMyReview(req.query)));
};
