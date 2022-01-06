import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { useStyles } from '../hooks/useStyles'

const getDescriptionFor = book =>
  book?.description ? book?.description : book?.name

const BookDetail = ({ book }) => {
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
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BookDetail
