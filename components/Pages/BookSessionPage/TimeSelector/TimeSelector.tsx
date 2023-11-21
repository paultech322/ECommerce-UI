import getMonthName from "../../../../lib/getMonthName"
import getWeekDay from "../../../../lib/getWeekDay"
import { useBookSession } from "../../../../providers/BookSessionProvider"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import BackwardButton from "../../../BackwardButton"
import FadeIn from "../../../FadeIn"
import EndTimeSelector from "../EndTimeSelector"
import SingleStudio from "../SingleStudio"
import StartTimeSelector from "../StartTimeSelector"

const TimeSelector = () => {
  const {
    STEPS,
    setCurStep,
    selectedStudio,
    selectedDay,
    selectedEndTime,
    availableTimes,
    selectedStartTime,
  } = useBookSession()

  return (
    <FadeIn className="w-full">
      <div className="grid grid-cols-12 md:pt-[24px] lg:pt-[32px] xl:pt-[40px]">
        <div className="col-span-4">
          <div className="flex items-center gap-x-[15px]">
            <BackwardButton onClick={() => setCurStep(STEPS.CHOOSE_DATE)} />
            <p
              className="font-urwgeometric_bold text-[#d2d2d2]
                md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
            >
              {getWeekDay(selectedDay)}, {getMonthName(selectedDay.month)} {selectedDay.day}th
            </p>
          </div>
        </div>
        <div className="col-span-8">
          <SingleStudio
            data={selectedStudio}
            hasEquipmentButton
            className="md:!h-[84px] lg:!h-[112px] xl:!h-[140px]"
          />
        </div>
      </div>
      <div
        className="flex flex-[1_auto_1] items-center
          md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[25px] 
          md:pt-[24px] lg:pt-[32px] xl:pt-[40px]"
      >
        <StartTimeSelector />
        <Media
          type="image"
          link="/images/BookSession/middle-line.svg"
          blurLink="/images/BookSession/middle-line.png"
          containerClasses="md:w-[12px] lg:w-[16px] xl:w-[20px] aspect-[20/8]"
        />
        <EndTimeSelector />
      </div>
      {selectedDay && selectedEndTime ? (
        <div
          className="w-full justify-center flex
          md:pt-[24px] lg:pt-[32px] xl:pt-[40px]"
        >
          <Button
            id="reserve-room"
            type="button"
            className="md:w-[288px] lg:w-[384px] xl:w-[480px] aspect-[10/1]
                text-black font-urwgeometric_bold
                border-r-[1px] border-r-[#A1EA04]
                border-l-[1px] border-l-[#A1EA04]
                border-b-[2px] border-b-[#A1EA04]
                shadow-[0px_0px_40px_0px_#a1ea0466]
                md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
            pulseColor="white"
            onClick={() => setCurStep(STEPS.ADD_DETAILS)}
          >
            Reserve {getMonthName(selectedDay.month)} {selectedDay.year}{" "}
            {availableTimes[selectedStartTime - 1]} - {availableTimes[selectedEndTime + 3]}
          </Button>
        </div>
      ) : (
        <div />
      )}
    </FadeIn>
  )
}

export default TimeSelector
