import React from 'react'

const PostContent = ({ text, onClick, className }) => {
  return (<div className={className} onClick={onClick || (() => { })}>{text || 'Enter Content Here'}</div>)
}

export default PostContent