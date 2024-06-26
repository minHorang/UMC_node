import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertStoreSql } from "./store.sql.js";

export const addStore = async (data) => {
  try {
    const conn = await pool.getConnection();

    await pool.query(insertStoreSql, [data.name, data.address, data.region_id]);

    conn.release();

    return;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
