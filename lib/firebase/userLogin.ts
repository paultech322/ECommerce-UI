import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import handleTxError from "../handleTxError"
import { auth } from "./db"

const userLogin = async (usermail, password) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, usermail, password)

    if (!credential.user.emailVerified) {
      toast.error("Email is not verified")
      return { error: "Email is not verifie" }
    }
    return credential
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default userLogin
