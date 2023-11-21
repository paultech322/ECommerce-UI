import { useAuth } from "../../../../providers/AuthProvider"
import ProgressBar from "../../../../shared/ProgressBar"

const StepBar = ({ currentStep }) => {
  const { totalStep } = useAuth()

  return (
    <>
      <ProgressBar value={(100 / totalStep) * currentStep} />
      <p
        className="pt-[25px] text-[#A1EA04] text-[16px]
              font-urwgeometric"
      >
        Step {currentStep}/{totalStep}
      </p>
    </>
  )
}

export default StepBar
