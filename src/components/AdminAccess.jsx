import React from 'react'
const AdminAccess = ({ children, role }) => {
  return (<>{
    role === 'admin' &&
    children
  }</>)
}
export default AdminAccess