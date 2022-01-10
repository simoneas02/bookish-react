import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { useStyles } from '../hooks/useStyles'
import ReviewList from './ReviewList'

const getDescriptionFor = ({ name, description }) =>
  description ? description : name

const BookDetail = ({ book: { name, description, reviews } }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.name}
            data-test="book-title"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {getDescriptionFor({ name, description })}
          </Typography>
          {reviews && <ReviewList reviews={reviews} />}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BookDetail
