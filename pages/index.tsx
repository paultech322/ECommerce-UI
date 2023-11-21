import AuthProvider from "../providers/AuthProvider"
import SignInPage from "../components/Pages/SignInPage"

const Landing = () => (
  <AuthProvider>
    <SignInPage />
  </AuthProvider>
)
export default Landing
