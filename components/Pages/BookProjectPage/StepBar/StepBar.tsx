import { useEffect, useState } from "react"
import ProgressBar from "../../../../shared/ProgressBar"
import { useBookProject } from "../../../../providers/BookProjectProvider"

const StepBar = () => {
  const { totalStep, curStep, STEPS } = useBookProject()
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    if (curStep === STEPS.ADD_DETAIL) setCurrentStep(1)
    if (curStep === STEPS.ADD_TRACKLIST) setCurrentStep(2)
    if (curStep === STEPS.PRICE_ESTIMATE) setCurrentStep(3)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curStep])
  return (
    <div className="w-[70%] flex flex-col self-center pt-[10px]">
      <ProgressBar value={(100 / totalStep) * currentStep} />
      <div
        className="w-full flex justify-around pt-[10px]
            font-urwgeometric_bold md:text-[12px] lg:text-[16px] xl:text-[20px]"
      >
        <p className={`${curStep === STEPS.ADD_DETAIL ? "text-[#A1EA04]" : "text-[#8c8c8c]"}`}>
          1. Add Details
        </p>
        <p className={`${curStep === STEPS.ADD_TRACKLIST ? "text-[#A1EA04]" : "text-[#8c8c8c]"}`}>
          2. Add Tracklist
        </p>
        <p className={` ${curStep === STEPS.PRICE_ESTIMATE ? "text-[#A1EA04]" : "text-[#8c8c8c]"}`}>
          3. Price Estimate
        </p>
      </div>
    </div>
  )
}

export default StepBar
