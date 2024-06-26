export const searchMyReview = async (query) => {
  const { reviewId, size = 3, myId } = query;
  return previewReviewResponseDTO(await getMyReview(reviewId, size, myId));
};
