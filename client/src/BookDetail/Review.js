import { Button, Grid, Typography } from '@material-ui/core'
import { useState } from 'react'

import { useStyles } from '../hooks/useStyles'

const Review = ({ review: { name, date, content } }) => {
  const classes = useStyles()

  const [editing, setEditing] = useState(false)

  return (
    <li className={classes.reviewList}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.reviewName}
      >
        {name}
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.reviewDate}
      >
        {date}
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.reviewContent}
      >
        {content}
      </Typography>

      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          name="submit"
          onClick={() => setEditing(!editing)}
        >
          {!editing ? 'Edit' : 'Submit'}
        </Button>
      </Grid>
    </li>
  )
}

export default Review
