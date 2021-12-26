import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import { useStyles } from '../hooks/useStyles'

const BookList = ({ books, loading, error }) => {
  const classes = useStyles()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>An unexpected error ocurred</p>
  }

  return (
    <Grid container spacing={3} data-test="book-list">
      {books.map(({ name, id }) => (
        <Grid
          item
          xs={4}
          sm={4}
          key={id}
          className="book-item"
          data-test="book-item"
        >
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.name}
                >
                  {name}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary">
                <Link to={`/books/${id}`}>View Details</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default BookList
