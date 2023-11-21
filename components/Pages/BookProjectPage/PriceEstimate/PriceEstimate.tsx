import { useBookProject } from "../../../../providers/BookProjectProvider"
import Button from "../../../../shared/Button"
import FadeIn from "../../../FadeIn"
import CancellationPolicy from "../CancellationPolicy"
import EstimateAmount from "../EstimateAmount"
import PriceDetails from "../PriceDetails"
import RulesSafety from "../RulesSafety"
import SingleStudio from "../SingleStudio"

const PriceEstimate = () => {
  const { setCurStep, STEPS } = useBookProject()

  return (
    <FadeIn
      className="grid grid-cols-2 w-full
        md:pt-[24px] lg:pt-[32px] xl:pt-[40px]
        md:gap-x-[24px] lg:gap-x-[32px] xl:gap-x-[40px]"
    >
      <div>
        <EstimateAmount />
        <PriceDetails />
      </div>
      <div>
        <SingleStudio />
        <RulesSafety />
        <CancellationPolicy />
      </div>
      <div className="col-span-2 flex flex-col items-center">
        <Button
          id="request-project"
          type="button"
          className="md:w-[201px] lg:w-[268px] xl:w-[335px] md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
                                text-black font-urwgeometric_bold
                                border-r-[1px] border-r-[#A1EA04]
                                border-l-[1px] border-l-[#A1EA04]
                                border-b-[2px] border-b-[#A1EA04]
                                shadow-[0px_0px_40px_0px_#a1ea0466]
                                md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]
                                md:mt-[24px] lg:mt-[32px] xl:mt-[40px]"
          pulseColor="white"
          onClick={() => setCurStep(STEPS.SUCCESS)}
        >
          Request Project
        </Button>
        <p
          className="md:text-[6px] lg:text-[8px] xl:text-[10px] text-[#8c8c8c] font-urwgeometric
                    md:pt-[14.4px] lg:pt-[19.2px] xl:pt-[24px]"
        >
          By clicking on the button below, you hereby agree to Studio Rules & Safety Policies & the
          Cancellation Policy. I also
          <br />
          agree that Session is allowed to use your used Payment Method for your booking and any
          future damage that might
          <br />
          happen through you in the studio.
        </p>
      </div>
    </FadeIn>
  )
}

export default PriceEstimate
