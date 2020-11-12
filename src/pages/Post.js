import { Grid, makeStyles } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { POSTS } from '../data/posts'
import withNavbar from '../hoc/Navbar'
import withEditableText from '../hoc/withEditable'

const useStyles = makeStyles(() => ({
  imageBox: {
    height: '500px'
    , width: '100%'
    , overflow: 'hidden'
    , position: 'relative'
    , display: 'flex'
    , justifyContent: 'center'
    , alignItems: 'center'
  }
  , image: {
    width: '100%'
    , marginTop: 'auto'
    , marginBottom: 'auto'

  }
  , editableImageBox: {
    '&:hover div': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
      , display: 'flex'
      , justifyContent: 'center'
      , alignItems: 'center'
    }
  }
  , imageOverlay: {
    backgroundColor: 'transparent'
    , display: 'none'
    , position: 'absolute'
    , top: '0'
    , height: '500px'
    , width: '100%'
    , cursor: 'pointer'
    , boxSizing: 'border-box'
    , border: '3px solid cyan'
  }
  , editIcon: {
    backgroundColor: 'grey'
    , borderRadius: '50px'
    , padding: '10px'
  }
}))

const PostImage = ({ image, style, editable }) => {
  const classes = useStyles()
  const inputRef = useRef()
  const [file, setFile] = useState(null)
  const handleClick = () => {
    inputRef.current.click()
  }
  const handleFileSelect = ({ target }) => {
    const file = target.files[0]
    setFile(file)
  }
  const defaultImage = (
    <div className={classes.imageBox} style={style}>
      <img src={image} className={classes.image} />
    </div>
  )
  const editableImage = (
    <div className={`${classes.imageBox} ${classes.editableImageBox} `} onClick={handleClick} style={style}>
      <img src={(file && URL.createObjectURL(file)) || image} className={classes.image} />
      <div className={classes.imageOverlay}>
        <Edit color='secondary' className={classes.editIcon} />
        <input type='file' ref={inputRef} style={{ display: 'none' }} onChange={handleFileSelect} accept=".jpg" />
      </div>
    </div>
  )
  return <>{editable ? editableImage : defaultImage}</>
}

const PostTitle = ({ text, onClick }) => {
  return (<h2 onClick={onClick || (() => { })}>{text}</h2>)
}

const PostContent = ({ text, onClick }) => {
  return (<div onClick={onClick || (() => { })}>{text}</div>)
}

const Post = () => {
  const params = useParams()
  const postId = params.postId
  const post = POSTS.find((post) => post.id === Number(postId))
  const location = useLocation()
  const editable = location.state.role && location.state.role === 'admin'
  const { title, content, image } = post
  const EditablePostTitle = withEditableText(PostTitle)
  const EditablePostContent = withEditableText(PostContent)
  return (
    <Grid container>
      <Grid item md={2} />
      <Grid item md={8}>
        <PostImage image={image} style={{ marginTop: '30px', }} editable={editable} />
        {editable ? <EditablePostTitle text={title} /> : <PostTitle text={title} />}
        {editable ? <EditablePostContent text={content} /> : <PostContent text={content} />}
      </Grid>
      <Grid item md={2} />
    </Grid>
  )
}

export default withNavbar(Post)