import { useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { useStyles } from '../hooks/useStyles'
import * as actions from '../redux/actions/actions'

const ReviewForm = ({ bookId }) => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="content"
            label="Content"
            margin="normal"
            variant="outlined"
            multiline
            maxRows="4"
            value={content}
            onChange={event => setContent(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            name="submit"
            onClick={() =>
              dispatch(actions.saveReview(bookId, { bookId, name, content }))
            }
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default ReviewForm
