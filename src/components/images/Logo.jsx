import { makeStyles } from '@material-ui/core'
import React from 'react'
import LogoImg from '../../images/logo.png'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  main: {
    height: '64px'
    , overflow: 'hidden'
    , '& img': {
      height: '200px'
      , marginTop: '-68px'
      , marginLeft: '-32px'
    }
  }
}))

const Logo = () => {
  const classes = useStyles()
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className={classes.main} onClick={handleClick}>
      <img src={LogoImg} alt="BlogIt" />
    </div>
  )
}

export default Logo