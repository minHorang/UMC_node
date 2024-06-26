export const insertReviewSql =
  "INSERT INTO review(store_id, score, body) VALIES(?,?,?);";

export const confirmStore =
  "SELECT EXISTS(SELECT 1 FROM store WHERE store_id = ?) as isExistStore";

export const selectMyReview =
  "SELECT m.name, m.id, r.id, r.store_id, r.rate, r.body, r.created_at, s.name " +
  "FROM review r JOIN memeber m on r.memeber_id = m.id JOIN store s on s.id = r.store_id " +
  "WHERE r.member_id = ? AND r.id < ? " +
  "ORDER BY r.id DESC LIMIT ? ;";

export const selectMyReviewAtFirst =
  "SELECT m.name, m.id, r.id, r.store_id, r.rate, r.body, r.created_at, s.name " +
  "FROM review r JOIN memeber m on r.memeber_id = m.id JOIN store s on s.id = r.store_id " +
  "WHERE r.member_id = ? " +
  "ORDER BY r.id DESC LIMIT ? ;";
