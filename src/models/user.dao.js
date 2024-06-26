import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {
  connectFoodCategory,
  confirmEmail,
  getUserID,
  insertUserSql,
  getPreferToUserID,
} from "./user.sql.js";

export const addUser = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmEmail, data.email);

    if (confirm[0].isExistEmail) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertUserSql, [
      data.email,
      data.name,
      data.gender,
      data.birth,
      data.address,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.PARAMATER_IS_WRONG);
  }
};

export const getUser = async (userID) => {
  try {
    const conn = await pool.getConnection();
    const [user] = await pool.query(getUserID, userID);

    console.log(user);

    if (user.length == 0) {
      return -1;
    }

    conn.release();
    return user;
  } catch (err) {
    throw new BaseError(status.PARAMATER_IS_WRONG);
  }
};

export const setPrefer = async (userId, foodCategoryId) => {
  try {
    const conn = await pool.getConnection();

    await pool.query(connectFoodCategory, [foodCategoryId, userId]);

    conn.release();

    return;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getUserPreferToUserID = async (userID) => {
  try {
    const conn = await pool.getConnection();
    const prefer = await pool.query(getPreferToUserID, userID);

    conn.release();

    return prefer;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
