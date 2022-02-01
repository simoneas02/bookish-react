import { Typography } from '@material-ui/core'

import { useStyles } from '../hooks/useStyles'

const Review = ({ review: { name, date, content } }) => {
  const classes = useStyles()

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
    </li>
  )
}

export default Review
