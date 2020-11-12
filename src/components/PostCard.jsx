import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, makeStyles } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AdminAccess from './AdminAccess'

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
}))

const PostCard = ({ id, title, content, image, role }) => {
  const classes = useStyles()
  const limitedContent = content.length > 100 ? `${content.slice(0, 100)}...` : content
  const history = useHistory()
  const handlePostClick = () => {
    if (!parseInt(id)) {
      return
    }
    history.push(`/posts/${id}`, { role })
  }

  return (<Card className={classes.root} onClick={handlePostClick}>
    <CardHeader title={title} className={classes.header} />
    <CardMedia image={image} title={title} className={classes.image} />
    <CardContent className={classes.content}>{limitedContent}</CardContent>
    <AdminAccess role={role}>
      <CardActions>
        <Grid container>
          <Grid item xs />
          <Grid item xs={1}>
            <Delete />
          </Grid>
        </Grid>
      </CardActions>
    </AdminAccess>
  </Card>)
}
export default PostCard