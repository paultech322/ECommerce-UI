import { useBookSession } from "../../../../providers/BookSessionProvider"
import CheckCard from "../CheckCard"

const EngineerNeedQuestion = () => {
  const { isEngineerNeeded, setIsEngineerNeeded } = useBookSession()

  return (
    <div
      className="bg-[#d2d2d208]
       md:p-[12px] lg:p-[16px] xl:p-[20px]
       md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
    >
      <p
        className="text-[#d2d2d2] font-urwgeometric_bold
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
      >
        Do you need an Engineer?
      </p>
      <p
        className="text-[#8c8c8c] font-urwgeometric
            md:text-[7.2px] md:text-[9.6px] xl:text-[12px]"
      >
        An Engineer is your go-to expert for all your recording needs.
        <br />
        From equipment setup and tracking, to sound quality and
        <br />
        technical support, the Engineer has got your back!
      </p>
      <div
        className="md:pt-[12px] lg:pt-[16px] xl:pt-[20px]
            flex flex-col
            md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]"
      >
        <CheckCard
          checked={isEngineerNeeded}
          onClick={() => setIsEngineerNeeded(true)}
          id="yes-want"
        >
          <p
            className="text-[#d2d2d2] pb-[8px]
                      md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]"
          >
            <span className="text-[#A1EA04]">Yes,</span> I want to get assistance from an Engineer
            in the studio.
          </p>
        </CheckCard>
        <CheckCard
          checked={!isEngineerNeeded}
          onClick={() => setIsEngineerNeeded(false)}
          id="yes-want"
        >
          <p
            className="text-[#8c8c8c]
                    md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]"
          >
            <span className="text-[#d2d2d2]">No.</span> I want to use the studio without any help
            from an Engineer.
          </p>
        </CheckCard>
      </div>
    </div>
  )
}

export default EngineerNeedQuestion
