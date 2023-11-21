import { useAuth } from "../../../../providers/AuthProvider"
import Button from "../../../../shared/Button/Button"
import BackwardButton from "../../../BackwardButton"
import Policies from "../Policies"
import ProgressBar from "../../../../shared/ProgressBar"

const CheckPolicy = () => {
  const { STEPS, isPolicyApproved, setCurStep, totalStep } = useAuth()

  return (
    <>
      <div>
        <BackwardButton className="mb-[30px]" onClick={() => setCurStep(STEPS.CREATE_PASSWORD)} />
        <ProgressBar value={(2 / totalStep) * 100} />
        <p
          className="font-urwgeometric_medium
text-[48px] text-[#d2d2d2] pt-[30px] pb-[60px]"
        >
          Policies
        </p>
      </div>
      <div
        className="flex-grow flex
    flex-col justify-between"
      >
        <Policies />
        <Button
          id="create-account"
          type="submit"
          className="w-full h-[48px]
          text-black font-urwgeometric_bold
          border-r-[1px] border-r-[#A1EA04]
          border-l-[1px] border-l-[#A1EA04]
          border-b-[2px] border-b-[#A1EA04]"
          pulseColor="white"
          disabled={!isPolicyApproved}
          onClick={() => setCurStep(STEPS.SUCCESS)}
        >
          Create Account
        </Button>
      </div>
    </>
  )
}

export default CheckPolicy
