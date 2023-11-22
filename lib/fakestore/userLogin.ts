import axios from "axios"
import { BACKEND_URL } from "../const"

const userLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        username,
        password
    })
    return response.data
  } catch (err) {
    return []
  }
}

export default userLogin
