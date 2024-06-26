import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { joinStore } from "../services/store.service.js";

export const storeAdd = async (req, res, next) => {
  console.log("가게 추가를 요청했습니다!");
  console.log("body:", req.body);

  res.send(response(status.SUCCESS, await joinStore(req.body)));
};
