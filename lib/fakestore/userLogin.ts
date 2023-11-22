import axios from "axios"
import { toast } from "react-toastify"
import { BACKEND_URL } from "../const"

const userLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, {
      username,
      password,
    })
    return response.data.token
  } catch (err) {
    toast.error("Username Or Password is incorrect.")
    return { error: err }
  }
}

export default userLogin
