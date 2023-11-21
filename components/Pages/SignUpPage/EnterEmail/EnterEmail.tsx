import useIsMobile from "../../../../hooks/useIsMobile"
import FadeIn from "../../../FadeIn"
import WelcomeText from "../../../WelcomeText"
import EmailForm from "../EmailForm"

const EnterEmail = () => {
  const isMobile = useIsMobile()

  return (
    <FadeIn className="md:flex md:flex-col md:justify-between md:flex-grow">
      {!isMobile && <WelcomeText />}
      <EmailForm />
    </FadeIn>
  )
}

export default EnterEmail
