import { FC } from "react"
import Button from "../../shared/Button"

interface LoginButtonProps {
  className?: string
}

const LoginButton: FC<LoginButtonProps> = ({ className }) => (
  <Button id="login_btn" className={className || ""} pulseColor="white">
    Login
  </Button>
)

export default LoginButton
