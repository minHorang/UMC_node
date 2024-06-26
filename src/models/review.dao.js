import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {
  insertReviewSql,
  confirmStore,
  selectMyReviewAtFirst,
  selectMyReview,
} from "./review.sql.js";

export const addReview = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmStore, data.store_id);

    if (confirm[0].isExsitStore == false) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertReviewSql, [
      data.store_id,
      data.score,
      data.body,
    ]);

    conn.release();
    return;
  } catch (err) {
    throw new BaseError(status.PARAMATER_IS_WRONG);
  }
};

export const getMyReview = async (cursorId, size, memberId) => {
  try {
    const conn = await pool.getConnection();

    if (
      cursorId == "undefined" ||
      typeof cursorId == "undefined" ||
      cursorId == null
    ) {
      const [reviews] = await pool.query(selectMyReviewAtFirst, [
        parseInt(memberId),
        parseInt(size),
      ]);
      conn.release();
      return reviews;
    } else {
      const [reviews] = await pool.query(selectMyReview, [
        parseInt(memberId),
        parseInt(cursorId),
        parseInt(size),
      ]);
      conn.release();
      return reviews;
    }
  } catch (err) {
    throw new BaseError(status.PARAMATER_IS_WRONG);
  }
};
