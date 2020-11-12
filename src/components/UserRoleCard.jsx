import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
})

const UserRoleCard = ({ image, text, onClick }) => {
  const classes = useStyles()
  return (
    <Card onClick={onClick} className={classes.root}>
      <CardContent>
        <img src={image} />
        <Typography>{text}</Typography>
      </CardContent>
    </Card>)
}
export default UserRoleCard