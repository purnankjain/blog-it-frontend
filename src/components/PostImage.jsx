import React, { useRef, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import DefaultImage from '../images/placeholder.png'

const useStyles = makeStyles(() => ({
  imageBox: {
    height: '400px'
    , width: '100%'
    , overflow: 'hidden'
    , position: 'relative'
    , display: 'flex'
    , justifyContent: 'center'
    , alignItems: 'center'
    , marginTop: '30px'
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
    , height: '400px'
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

const PostImage = ({ image, onChange, editable, className }) => {
  const classes = useStyles()
  const inputRef = useRef()
  const handleClick = () => {
    inputRef.current.click()
  }
  const handleFileSelect = ({ target }) => {
    const file = target.files[0]
    onChange(file)
  }
  const postImage = image || DefaultImage
  const renderDefaultPostImage = (
    <div className={`${classes.imageBox} ${className}`}>
      <img src={postImage} className={classes.image} />
    </div>
  )
  const editableImage = (
    <div className={`${classes.imageBox} ${classes.editableImageBox} ${className}`} onClick={handleClick}>
      <img src={postImage} className={classes.image} />
      <div className={classes.imageOverlay}>
        <Edit color='secondary' className={classes.editIcon} />
        <input type='file' ref={inputRef} style={{ display: 'none' }} onChange={handleFileSelect} accept=".jpg" />
      </div>
    </div>
  )
  return <>{editable ? editableImage : renderDefaultPostImage}</>
}

export default PostImage