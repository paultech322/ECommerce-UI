import axios from "axios"
import { BACKEND_URL } from "../const"
import handleTxError from "../handleTxError"

const addNewCart = async (userId, products) => {
  try {
    if (!userId) return []
    const response = await axios.post(`${BACKEND_URL}/carts`, {
      userId,
      date: new Date().toDateString(),
      products,
    })
    return response.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default addNewCart
