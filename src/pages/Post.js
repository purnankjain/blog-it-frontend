import { Button, Grid, makeStyles } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import withNavbar from '../hoc/Navbar'
import POST_SERVICE from './../services/PostService';
import EditablePost from '../components/EditablePost'
import CONSTANTS from './../Constants';
import IMAGE_SERVICE from './../services/ImageService';


const useStyles = makeStyles({
  button: {
    marginTop: '20px'
  }
})

const Post = () => {
  const params = useParams()
  const postId = params.postId
  const [post, setPost] = useState(null)
  const classes = useStyles()

  const getPost = useCallback(() => {
    POST_SERVICE.getPostById(postId).then(({ data }) => {
      setPost(data)
    }).catch((err) => {
      console.log({ err });
    })
  }, [postId])

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

  const handleCancel = () => {
    getPost()
  }

  const handleSave = () => {
    const updatePost = (postId, imageId, title, content) => {
      POST_SERVICE.updatePost(postId, imageId, title, content).then(() => {
        getPost()
      }).catch((err) => {
        console.log({ err });
      })
    }
    if (post.image) {
      IMAGE_SERVICE.uploadImage(post.image).then(({ data }) => {
        updatePost(postId, data.id, post.title, post.content)
      }).catch((err) => {
        console.log({ err });
      })
    } else {
      updatePost(postId, post.image_id, post.title, post.content)
    }


  }

  useEffect(() => {
    getPost()
  }, [getPost])

  const location = useLocation()
  const editable = location?.state?.role && location.state.role === 'admin'
  const title = post?.title
  const content = post?.content
  const image = (post?.image && URL.createObjectURL(post.image)) || (post?.image_id && CONSTANTS.URL.GET_IMAGE_BY_ID(post?.image_id))
  const actionButtons = (
    <Grid container>
      <Grid item sm={3}><Button className={classes.button} variant='outlined' color='primary' onClick={handleSave} >Save Changes</Button></Grid>
      <Grid item sm={3}><Button className={classes.button} variant='outlined' color='primary' onClick={handleCancel}>Cancel</Button></Grid>
    </Grid>
  )
  return (
    <Grid container>
      <Grid item md={2} />
      <Grid item md={8}>
        <EditablePost title={title} image={image} content={content} onImageChange={handleImageChange} onContentChange={handleContentChange} onTitleChange={handleTitleChange} editable={editable} />
        {editable && actionButtons}
      </Grid>
      <Grid item md={2} />
    </Grid>
  )
}

export default withNavbar(Post)