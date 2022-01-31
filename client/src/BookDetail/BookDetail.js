import { Typography } from '@material-ui/core'

import { useStyles } from '../hooks/useStyles'

import ReviewForm from './ReviewForm'

import ReviewList from './ReviewList'

const getDescriptionFor = book =>
  book?.description ? book?.description : book?.name

const BookDetail = ({ book }) => {
  const classes = useStyles()

  return (
    <div>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.name}
        data-test="book-title"
      >
        {book?.name}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.description}
      >
        {getDescriptionFor(book)}
      </Typography>

      <ReviewForm id={book?.id} />

      {book?.reviews && <ReviewList reviews={book?.reviews} />}
    </div>
  )
}

export default BookDetail
