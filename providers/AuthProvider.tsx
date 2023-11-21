import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { STEPS } from '../lib/authStep'
import useIsMobile from "../hooks/useIsMobile"
import { useRouter } from "next/router"

const AuthContext = createContext(null)

const AuthProvider = ({ children, isRegisterOrResetPass = false }) => {
  const isMobile = useIsMobile()
  const pathname = useRouter().pathname


  const isSignUpPage = pathname.includes('/signup')
  const isSignInPage = pathname.includes('/signin')
  const isResetPage = pathname.includes('/forgotpass')

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [isSharingData, setIsSharingData] = useState(false)
  const [isPolicyApproved, setIsPolicyApproved] = useState(false)
  const [curStep, setCurStep] = useState(null)
  const totalStep = useMemo(() => isRegisterOrResetPass ? 3 : 1, [isRegisterOrResetPass])

  useEffect(() => {
    if (isResetPage) {
      setCurStep(STEPS.INPUT_EMAIL)
      return
    }
    if (isMobile) {
      setCurStep(STEPS.LANDING)
    } else {
      if (isSignInPage) setCurStep(STEPS.INPUT_EMAIL_PASSWORD)
      if (isSignUpPage) setCurStep(STEPS.INPUT_EMAIL)
    }
  }, [pathname, isMobile])

  const value = useMemo(
    () => ({
      userEmail,
      setUserEmail,
      curStep,
      setCurStep,
      STEPS,
      totalStep,
      userPassword,
      setUserPassword,
      userName,
      setUserName,
      isPolicyApproved,
      setIsPolicyApproved,
      isSharingData,
      setIsSharingData
    }),
    [
      userEmail,
      setUserEmail,
      curStep,
      setCurStep,
      STEPS,
      totalStep,
      userPassword,
      setUserPassword,
      userName,
      setUserName,
      isPolicyApproved,
      setIsPolicyApproved,
      isSharingData,
      setIsSharingData
    ],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}

export default AuthProvider
