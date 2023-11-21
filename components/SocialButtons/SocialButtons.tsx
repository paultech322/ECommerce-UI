import AppleButton from "../AppleButton"
import GoogleButton from "../GoogleButton"
import InstagramButton from "../InstagramButton"
import TwitterButton from "../TwitterButton"

const SocialButtons = ({ className = "" }) => (
  <div
    className={`flex gap-x-[10px] samsungS8:gap-x-[20px]
    justify-center ${className}`}
  >
    <GoogleButton />
    <InstagramButton />
    <TwitterButton />
    <AppleButton />
  </div>
)

export default SocialButtons
