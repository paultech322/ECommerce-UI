import SignUpPage from "../../components/Pages/SignUpPage"
import AuthProvider from "../../providers/AuthProvider"

const SignUp = () => (
  <AuthProvider isRegisterOrResetPass>
    <SignUpPage />
  </AuthProvider>
)

export default SignUp
