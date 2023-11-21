import ForgotPassPage from "../../components/Pages/ForgotPassPage"
import AuthProvider from "../../providers/AuthProvider"

const ForgotPass = () => (
  <AuthProvider isRegisterOrResetPass>
    <ForgotPassPage />
  </AuthProvider>
)

export default ForgotPass
