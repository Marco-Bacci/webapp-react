const ReviewCard = ({review}) => {
  return (
    <div className="review-card my-3">
      <h3>{review.name}</h3>
      <p>voto: {review.vote}</p>
      <p>{review.text}</p>
    </div>
  );
};

export default ReviewCard;
