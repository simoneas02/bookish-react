const ReviewList = ({ reviews }) => (
  <ul data-test="reviews-container">
    {reviews.map(({ name, date }) => (
      <li key={`${name}-${date}`}>{name}</li>
    ))}
  </ul>
)

export default ReviewList
