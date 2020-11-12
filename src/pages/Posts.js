import { Grid } from '@material-ui/core';
import React from 'react'
import { useLocation } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { POSTS } from '../data/posts';
import withNavbar from './../hoc/Navbar';
const Posts = () => {
  const location = useLocation()
  const role = location.state?.role || 'user'
  const renderPosts = POSTS.map((post) =>
    <Grid item sm={12} md={6} lg={4} key={post.id}>
      <PostCard id={post.id} title={post.title} content={post.content} image={post.image} role={role} />
    </Grid>
  )
  return (
    <div style={{ padding: '50px', }}>
      <Grid container spacing={5}>
        {renderPosts}
      </Grid>
    </div>
  )
}
export default withNavbar(Posts)