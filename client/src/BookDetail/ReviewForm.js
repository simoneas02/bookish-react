import { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions/actions'

const ReviewForm = ({ id }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Name"
        name="name"
        margin="normal"
        variant="outlined"
        value={name}
        onChange={event => setName(event.target.value)}
      />
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
      <Button
        variant="contained"
        color="primary"
        name="submit"
        onClick={() => dispatch(actions.saveReview(id, { name, content }))}
      >
        Submit
      </Button>
    </form>
  )
}

export default ReviewForm
