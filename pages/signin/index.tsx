import SignInPage from "../../components/Pages/SignInPage"
import AuthProvider from "../../providers/AuthProvider"

const SignIn = () => (
  <AuthProvider>
    <SignInPage />
  </AuthProvider>
)

export default SignIn
