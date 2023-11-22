import axios from "axios"
import { BACKEND_URL } from "../const"
import handleTxError from "../handleTxError"

const userRegister = async (username, password, email, firstname, lastname, phone) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/users`, {
      email,
      username,
      password,
      name: {
        lastname,
        firstname,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone,
    })
    return response.data.id
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default userRegister
