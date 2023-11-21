import { useRouter } from "next/router"
import { useAuth } from "../../../../providers/AuthProvider"
import Button from "../../../../shared/Button/Button"
import BackwardButton from "../../../BackwardButton"

const SentRestEmail = () => {
  const { STEPS, setCurStep } = useAuth()
  const router = useRouter()

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="pb-[60px]">
        <BackwardButton onClick={() => setCurStep(STEPS.INPUT_EMAIL)} className="mb-[30px]" />
        <p
          className="font-urwgeometric_medium leading-[48px]
              text-[48px] text-[#d2d2d2] pt-[30px]"
        >
          Reset your Password
        </p>
        <p
          className="font-urwgeometric text-[#d2d2d2] text-[16px] leading-[20px]
            pt-[20px]"
        >
          We’ve sent you an email with details on how to reset your password.
          <br />
          Check your inbox.
        </p>
      </div>
      <div className="flex-grow flex items-end">
        <Button
          id="tell-about-you"
          type="submit"
          className="w-full h-[48px]
                text-black font-urwgeometric_bold
                border-r-[1px] border-r-[#A1EA04]
                border-l-[1px] border-l-[#A1EA04]
                border-b-[2px] border-b-[#A1EA04]
                shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
          onClick={() => router.push("/signin")}
        >
          Back to Log In
        </Button>
      </div>
    </>
  )
}

export default SentRestEmail
