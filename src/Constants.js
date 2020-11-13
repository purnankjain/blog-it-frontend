const BASE_URL = 'http://localhost:8080'

const URL = {
  GET_POSTS: `${BASE_URL}/posts`
  , GET_IMAGE_BY_ID: (imageId) => `${BASE_URL}/images/${imageId}`
  , GET_POST_BY_ID: (postId) => `${BASE_URL}/posts/${postId}`
  , CREATE_POST: `${BASE_URL}/posts`
  , UPLOAD_IMAGE: `${BASE_URL}/images`
  , UPDATE_POST: (postId) => `${BASE_URL}/posts/${postId}`
  , DELETE_POST: (postId) => `${BASE_URL}/posts/${postId}`
}

const CONSTANTS = {
  URL
}

export default CONSTANTS