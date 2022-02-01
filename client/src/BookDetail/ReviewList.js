import Review from './Review'

const ReviewList = ({ reviews = [] }) => (
  <ul data-test="reviews-container">
    {reviews?.map((review, key) => (
      <Review key={`${key}-${review.date}`} review={review} />
    ))}
  </ul>
)

export default ReviewList
