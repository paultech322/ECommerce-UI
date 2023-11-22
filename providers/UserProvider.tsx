import React, { createContext, useContext, useMemo } from "react"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {

  const value = useMemo(
    () => ({ 

    }),
    [

    ],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserProvider = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useInviteCode must be used within a UserProvider")
  }
  return context
}

export default UserProvider
