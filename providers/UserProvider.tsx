import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useLocalStorage } from "usehooks-ts"
import userLogin from "../lib/fakestore/userLogin"
import { useRouter } from "next/router"
import userRegister from "../lib/fakestore/userRegister"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const router = useRouter()
  const [userId, setUserId] = useLocalStorage<any>("userId", "")
  const [token, setUserToken] = useLocalStorage<any>("userToken", "")
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const login = async () => {
    const response = await userLogin(userName, userPassword)
    if(response.error) return

    setUserToken(response)
    router.push('/home')
  }

  const register = async () => {
      const response = await userRegister(userName, userPassword, userEmail, firstName, lastName, phoneNumber)

      if(response.err) return

      setUserId(response)

      setUserName("")
      setUserPassword("")
      router.push('/signin')
  }

  useEffect(() => {
    setUserId(9)
  }, [])

  const value = useMemo(
    () => ({
      userName,
      token,
      setUserName,
      userPassword,
      setUserPassword,
      userId,
      login,
      register,
      userEmail,
      setUserEmail,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      phoneNumber,
      setPhoneNumber
    }),
    [
      token,
      userId,
      login,
      register,
      userName,
      userPassword,
      setUserName,
      setUserPassword,
      userEmail,
      setUserEmail,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      phoneNumber,
      setPhoneNumber
    ],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserProvider = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider")
  }
  return context
}

export default UserProvider
