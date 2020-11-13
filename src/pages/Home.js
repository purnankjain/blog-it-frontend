import { Grid } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import UserRoleCard from '../components/UserRoleCard';
import withNavbar from './../hoc/Navbar';
import { Lock, Person } from '@material-ui/icons'

const Home = () => {
  const history = useHistory()
  const handleAdminClick = () => {
    history.push('/posts', {
      role: 'admin'
    })
  }
  const handleUserClick = () => {
    history.push('/posts', {
      role: 'user'
    })
  }
  return (
    <Grid container justify="space-evenly">
      <Grid item xs={12} sm={5} lg={4}>
        <UserRoleCard text="Admin" icon={Lock} onClick={handleAdminClick} />
      </Grid>
      <Grid item xs={12} sm={5} lg={4}>
        <UserRoleCard text="User" icon={Person} onClick={handleUserClick} />
      </Grid>
    </Grid>
  )
}

export default withNavbar(Home)