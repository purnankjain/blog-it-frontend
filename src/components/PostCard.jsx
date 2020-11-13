import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, makeStyles } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AdminAccess from './AdminAccess'
import DefaultImage from '../images/placeholder.png'
import CONSTANTS from '../Constants'
import POST_SERVICE from './../services/PostService';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '450px'
    , [theme.breakpoints.up('md')]: {
      height: '450px'
    }
  }
  , header: {
    minHeight: '100px'
    , boxSizing: 'border-box'
  }
  , image: {
    height: '150px'
  }
  , content: {
    height: '100px'
  }
  , deleteButton: {
    cursor: 'pointer'
  }
}))

const PostCard = ({ id, title, content, imageId, role, onDelete }) => {
  const classes = useStyles()
  const limitedContent = content.length > 100 ? `${content.slice(0, 100)}...` : content
  const history = useHistory()
  const handlePostClick = () => {
    if (!parseInt(id)) {
      return
    }
    history.push(`/posts/${id}`, { role })
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    POST_SERVICE.deletePost(id).then(() => {
      onDelete()
    })
  }

  const image = imageId ? CONSTANTS.URL.GET_IMAGE_BY_ID(imageId) : DefaultImage

  return (<Card className={classes.root} onClick={handlePostClick}>
    <CardHeader title={title} className={classes.header} />
    <CardMedia image={image} title={title} className={classes.image} />
    <CardContent className={classes.content}>{limitedContent}</CardContent>
    <AdminAccess role={role}>
      <CardActions>
        <Grid container>
          <Grid item xs />
          <Grid item xs={1}>
            <Delete onClick={handleDelete} className={classes.deleteButton} />
          </Grid>
        </Grid>
      </CardActions>
    </AdminAccess>
  </Card>)
}
export default PostCard