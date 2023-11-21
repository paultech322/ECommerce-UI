import { useEffect, useState } from "react"
import { useBookSession } from "../../../../providers/BookSessionProvider"
import ProgressBar from "../../../../shared/ProgressBar"

const StepBar = () => {
  const { totalStep, curStep, STEPS } = useBookSession()
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    if (curStep === STEPS.CHOOSE_ROOM) setCurrentStep(1)
    if (curStep === STEPS.CHOOSE_DATE || curStep === STEPS.CHOOSE_TIME) setCurrentStep(2)
    if (curStep === STEPS.ADD_DETAILS) setCurrentStep(3)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curStep])
  return (
    <div className="w-[70%] flex flex-col self-center pt-[10px]">
      <ProgressBar value={(100 / totalStep) * currentStep} />
      <div
        className="w-full flex justify-around pt-[10px]
            font-urwgeometric_bold md:text-[12px] lg:text-[16px] xl:text-[20px]"
      >
        <p className={`${curStep === STEPS.CHOOSE_ROOM ? "text-[#A1EA04]" : "text-[#8c8c8c]"}`}>
          1. Choose Room
        </p>
        <p
          className={`${
            curStep === STEPS.CHOOSE_DATE || curStep === STEPS.CHOOSE_TIME
              ? "text-[#A1EA04]"
              : "text-[#8c8c8c]"
          }`}
        >
          2. Choose Day & Time
        </p>
        <p className={` ${curStep === STEPS.ADD_DETAILS ? "text-[#A1EA04]" : "text-[#8c8c8c]"}`}>
          3. Add Details
        </p>
      </div>
    </div>
  )
}

export default StepBar
