import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
    , marginTop: '50px'
    , height: '300px'
    , display: 'flex'
    , textAlign: 'center'
    , justifyContent: 'center'
    , alignItems: 'center'
    , '& *': {
      fontSize: '50px'
    }
    , [theme.breakpoints.up('sm')]: {
      marginTop: '200px'
    }
    , '&:hover': {
      backgroundColor: '#dedede'
      , cursor: 'pointer'
    }
  }
}))

const UserRoleCard = ({ icon, text, onClick }) => {
  const classes = useStyles()
  const Icon = icon
  return (
    <Card onClick={onClick} className={classes.root}>
      <CardContent className={classes.content}>
        <Icon />
        <Typography>{text}</Typography>
      </CardContent>
    </Card>)
}
export default UserRoleCard