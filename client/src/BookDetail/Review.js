import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions/actions'

import { useStyles } from '../hooks/useStyles'

const Review = ({ review }) => {
  const classes = useStyles()

  const [editing, setEditing] = useState(false)
  const [content, setContent] = useState(review.content)

  const dispatch = useDispatch()

  const clickHandler = () => {
    if (editing) {
      dispatch(actions.updateReview(review.bookId, { ...review, content }))
    }

    setEditing(!editing)
  }

  return (
    <li className={classes.reviewList}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.reviewName}
      >
        {review.name}
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.reviewDate}
      >
        {review.date}
      </Typography>

      {!editing ? (
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.reviewContent}
        >
          {content}
        </Typography>
      ) : (
        <TextField
          name="editContent"
          label="Content"
          margin="normal"
          variant="outlined"
          multiline
          maxRows="4"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
      )}

      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          name="submit"
          onClick={clickHandler}
        >
          {!editing ? 'Edit' : 'Submit'}
        </Button>
      </Grid>
    </li>
  )
}

export default Review
