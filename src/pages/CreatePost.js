import React, { useState } from 'react'
import withNavbar from './../hoc/Navbar';
import { Button, Grid, makeStyles } from '@material-ui/core';
import POST_SERVICE from './../services/PostService';
import { useHistory, useLocation } from 'react-router-dom';
import IMAGE_SERVICE from './../services/ImageService';
import EditablePost from '../components/EditablePost';

const useStyles = makeStyles({
  button: {
    marginTop: '20px'
  }
})

const CreatePost = () => {
  const [post, setPost] = useState({ image: null, title: '', content: '' })
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles()
  const role = location?.state.role
  const editable = location?.state?.role && location.state.role === 'admin'
  const handleImageChange = (file) => {
    setPost({
      ...post
      , image: file
    })
  }
  const handleTitleChange = (text) => {
    setPost({
      ...post
      , title: text
    })
  }
  const handleContentChange = (text) => {
    setPost({
      ...post
      , content: text
    })
  }

  const handleCreate = () => {

    const createNewPost = (imageId, title, content) => {
      POST_SERVICE.createPost(imageId, title, content).then(({ data }) => {
        history.push(`/posts/${data.id}`, { role })
      }).catch((err) => {
        console.log({ err });
      })
    }

    if (post?.image) {
      IMAGE_SERVICE.uploadImage(post.image).then(({ data }) => {
        createNewPost(data.id, post.title, post.content)
      }).catch((err) => {
        console.log({ err });
      })
    } else {
      createNewPost(null, post.title, post.content)
    }
  }

  const image = post.image && URL.createObjectURL(post.image)
  return (
    <Grid container>
      <Grid item md={2} />
      <Grid item md={8}>
        <EditablePost title={post.title} image={image} content={post.content} onImageChange={handleImageChange} onContentChange={handleContentChange} onTitleChange={handleTitleChange} editable={editable} />
        <Button onClick={handleCreate} className={classes.button} variant='outlined' color='primary' >Create Post</Button>
      </Grid>
    </Grid>
  )
}

export default withNavbar(CreatePost)