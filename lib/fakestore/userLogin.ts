import axios from "axios"
import { BACKEND_URL } from "../const"
import { toast } from "react-toastify"

const userLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        username,
        password
    })
    return response.data
  } catch (err) {
    toast.error('Username Or Password is incorrect.')
    return {error: err}
  }
}

export default userLogin
