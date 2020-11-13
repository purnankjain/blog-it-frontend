import React from 'react'

const PostTitle = ({ text, onClick, className }) => {
  return (<h2 className={className} onClick={onClick || (() => { })}>{text || 'Enter Title Here'}</h2>)
}

export default PostTitle