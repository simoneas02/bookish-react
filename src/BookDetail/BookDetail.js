import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core'
import { useState } from 'react'
import { useStyles } from '../hooks/useStyles'
import ReviewList from './ReviewList'

const getDescriptionFor = book =>
  book?.description ? book?.description : book?.name

const BookDetail = ({ book }) => {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  return (
    <Card>
      <div>
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

          <form noValidate autoComplete="off">
            <TextField
              label="Name"
              name="name"
              margin="normal"
              variant="outlined"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              name="content"
              label="Content"
              margin="normal"
              variant="outlined"
              multiline
              maxRows="4"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            <Button variant="contained" color="primary" name="submit">
              Submit
            </Button>
          </form>

          {book?.reviews && <ReviewList reviews={book?.reviews} />}
        </CardContent>
      </div>
    </Card>
  )
}

export default BookDetail
