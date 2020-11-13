import React, { useMemo, useState } from 'react'
import PostImage from './PostImage'
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  textArea: {
    height: '32px'
    , marginTop: '20px'
    , marginBottom: '20px'
    , width: '100%'
    , resize: 'none'
  }
  , editableText: {
    border: 'none'
    , boxSizing: 'border-box'
    , padding: '2px'
    , cursor: 'text'
    , '&:hover': {
      border: '1px solid black'
      , borderRadius: '1px'
      , padding: '1px'
    }
  },
})

const withEditableText = (WrappedComponent) => (props) => {
  const classes = useStyles()
  const { text, onChange, editable } = props
  const [editing, setEditing] = useState(false)
  const handleEditing = () => {
    setEditing(!editing)
  }
  const disableEditing = () => {
    setEditing(false)
  }
  const handleEdit = (e) => {
    const { target } = e
    onChange(target.value)
  }
  const defaultRender = (<WrappedComponent className={classes.editableText} text={text} onClick={handleEditing} />)
  const editableRender = (<textarea type="text" value={text} onChange={handleEdit} className={classes.textArea} autoFocus onBlur={disableEditing} />)
  return (<>{editing && editable ? editableRender : defaultRender}</>)
}

const EditablePost = ({ image, title, content, onImageChange, onTitleChange, onContentChange, editable }) => {
  const EditableTitle = useMemo(() => withEditableText(PostTitle), [PostTitle])
  const EditableContent = useMemo(() => withEditableText(PostContent), [PostContent])
  return (
    <>
      <PostImage image={image} onChange={onImageChange} editable={editable} />
      <EditableTitle text={title} onChange={onTitleChange} editable={editable} />
      <EditableContent text={content} onChange={onContentChange} editable={editable} />
    </>
  )
}

export default EditablePost