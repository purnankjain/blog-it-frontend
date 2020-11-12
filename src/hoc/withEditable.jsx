import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
  textArea: {
    height: '32px'
    , marginTop: '20px'
    , marginBottom: '20px'
    , width: '100%'
    , resize: 'none'
  }
})

const withEditableText = (WrappedComponent) => (props) => {
  const classes = useStyles()
  const { text } = props
  const [editableText, setEditableText] = useState(null)
  const [editing, setEditing] = useState(false)
  const handleEditing = () => {
    setEditing(!editing)
  }
  const disableEditing = () => {
    setEditing(false)
  }
  const handleEdit = (e) => {
    const { target } = e
    setEditableText(target.value)
  }
  const defaultRender = (<WrappedComponent text={text} onClick={handleEditing} />)
  const editableRender = (<textarea type="text" value={editableText || text} onChange={handleEdit} className={classes.textArea} onBlur={disableEditing} />)
  return (<>{editing ? editableRender : defaultRender}</>)
}

export default withEditableText