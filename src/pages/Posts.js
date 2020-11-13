import { Grid } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import PostCard from '../components/PostCard';
import withNavbar from './../hoc/Navbar';
import POST_SERVICE from './../services/PostService';
const Posts = () => {
  const location = useLocation()
  const role = location.state?.role || 'user'
  const [posts, setPosts] = useState([])
  const getAllPosts = useCallback(() => {
    POST_SERVICE.getAllPosts().then(({ status, data }) => {
      setPosts(data)
    }).catch((err) => {
      console.log({ err });
    })
  }, [])
  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  const renderPosts = posts.map((post) =>
    <Grid item sm={12} md={6} lg={4} key={post.id}>
      <PostCard id={post.id} title={post.title} content={post.content} imageId={post.image_id} role={role} onDelete={getAllPosts} />
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