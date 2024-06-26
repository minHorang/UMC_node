import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addStore } from "../models/store.dao.js";

export const joinStore = async (body) => {
  const addStoreData = await addStore({
    name: body.name,
    address: body.address,
    region_id: body.region_id,
  });

  return 0;
};
