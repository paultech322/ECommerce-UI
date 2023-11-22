import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useLocalStorage } from "usehooks-ts"
import userLogin from "../lib/fakestore/userLogin"
import { useRouter } from "next/router"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const router = useRouter()
  const [userId, setUserId] = useLocalStorage<any>("userId", "")
  const [token, setUserToken] = useLocalStorage<any>("userToken", "")
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const login = async () => {
    const response = await userLogin(userName, userPassword)
    if(response.err) {
      return
    }
    setUserToken(token)
    router.push('/home')
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
      login
    }),
    [
      token,
      userId,
      login,
      userName,
      userPassword,
      setUserName,
      setUserPassword
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
