import axios from "axios"
import { BACKEND_URL } from "../const"

const getCartData = async (userId) => {
  try {
    if (!userId) return []
    const response = await axios.get(`${BACKEND_URL}/carts/user/${userId}`)
    return response.data
  } catch (err) {
    return []
  }
}

export default getCartData
