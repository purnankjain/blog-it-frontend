import Axios from "axios"
import CONSTANTS from "../Constants"

const { URL } = CONSTANTS

const uploadImage = async (image) => {
  const formData = new FormData()
  formData.append('image', image)
  return await Axios.post(URL.UPLOAD_IMAGE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
}

const IMAGE_SERVICE = {
  uploadImage
}

export default IMAGE_SERVICE