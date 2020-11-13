import Axios from "axios"
import CONSTANTS from "../Constants"

const { URL } = CONSTANTS

const getAllPosts = async () => {
  return await Axios.get(URL.GET_POSTS)
}

const getPostById = async (postId) => {
  return await Axios.get(URL.GET_POST_BY_ID(postId))
}

const createPost = async (imageId, title, content) => {
  const dto = { imageId, title, content }
  return await Axios.post(URL.CREATE_POST, dto)
}

const updatePost = async (postId, imageId, title, content) => {
  const dto = { imageId, title, content }
  return await Axios.put(URL.UPDATE_POST(postId), dto)
}

const deletePost = async (postId) => {
  return await Axios.delete(URL.DELETE_POST(postId))
}

const POST_SERVICE = {
  getAllPosts
  , getPostById
  , createPost
  , updatePost
  , deletePost
}

export default POST_SERVICE