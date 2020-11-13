import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import Logo from '../components/images/Logo'
import { useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: '10px'
    , '&:hover': {
      backgroundColor: '#747eba'
      , cursor: 'pointer'
    }
  }
}))

const adminOptions = [
  {
    text: 'View'
    , url: '/posts'
  },
  {
    text: 'Create'
    , url: '/create'
  }
]

const userOptions = [
  {
    text: 'View'
    , url: '/posts'
  }
]

const MenuItem = ({ text, url, role }) => {
  const history = useHistory()
  const classes = useStyles()
  const handleClick = () => {
    history.push(url, { role })
  }
  return (
    <div onClick={handleClick} style={{ marginLeft: '30px' }} className={classes.item}>
      {text}
    </div>
  )
}

const Menu = ({ role }) => {
  const options = role === 'admin' ? adminOptions : userOptions
  const renderMenu = options.map((option, index) => <MenuItem key={index} text={option.text} url={option.url} role={role} />)
  return (
    <>
      {renderMenu}
    </>
  )
}

const withNavbar = PageComponent => () => {
  const location = useLocation()
  const role = location.state?.role || 'user'
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Logo />
          <Menu role={role} />
        </Toolbar>
      </AppBar>
      <PageComponent />
    </div>
  )
}

export default withNavbar