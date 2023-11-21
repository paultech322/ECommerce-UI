import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import WelcomeText from "../../../WelcomeText"
import ClipSpan from "../../../ClipSpan"
import FadeIn from "../../../FadeIn"
import { useAuth } from "../../../../providers/AuthProvider"
import { STEPS } from "../../../../lib/authStep"

const Landing = () => {
  const router = useRouter()
  const { setCurStep } = useAuth()

  return (
    <FadeIn>
      <WelcomeText />
      <Button
        id="landing-btn"
        type="submit"
        className="w-full h-[39.3px] samsungS8:h-[44.3px] xs:h-[48px] 
                my-[24.6px] lg:my-[27.6px] xs:my-[30px]
                text-black font-urwgeometric_bold
                border-r-[1px] border-r-[#A1EA04]
                border-l-[1px] border-l-[#A1EA04]
                border-b-[2px] border-b-[#A1EA04]
                shadow-[0px_0px_40px_0px_#a1ea0466]"
        pulseColor="white"
        onClick={() => setCurStep(STEPS.INPUT_EMAIL)}
      >
        Sign up
      </Button>
      <p
        className="text-[#d2d2d2] font-urwgeometric
                text-[12px] text-center"
      >
        Already have an account? &nbsp;
        <button
          type="button"
          onClick={() => router.push("/signin")}
          className="border-b-[1px] border-b-[#a1ea04]"
        >
          <ClipSpan className="font-urwgeometric_bold">Log In</ClipSpan>
        </button>
      </p>
    </FadeIn>
  )
}

export default Landing
