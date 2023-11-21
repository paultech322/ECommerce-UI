import getMonthName from "../../../../lib/getMonthName"
import getWeekDay from "../../../../lib/getWeekDay"
import { useBookSession } from "../../../../providers/BookSessionProvider"
import Media from "../../../../shared/Media"

const BookedStudio = ({ className = "" }) => {
  const { selectedStudio, selectedDay, availableTimes, selectedStartTime, selectedEndTime, STEPS } =
    useBookSession()

  const isSuccessPage = STEPS.SUCCESS_BOOKED

  return (
    <div
      className={`w-full overflow-hidden
        md:rounded-[9.6px] lg:rounded-[12.8px] xl:rounded-[16px]
        md:my-[24px] lg:my-[32px] xl:my-[40px]
        md:h-[80.4px] lg:h-[107.2px] xl:h-[134px]
        flex ${className}`}
    >
      <div
        className="w-[140px]
            border-r-[2px] border-[#a1ea04]
            bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${selectedStudio?.img}')`,
        }}
      />
      <div
        className={`md:p-[9.6px] lg:p-[12.8px] xl:p-[16px]
        flex-grow bg-cover bg-center relative ${isSuccessPage ? "!text-[16px] !p-[16px]" : ""}`}
        style={{
          backgroundImage: `url('${selectedStudio?.img}')`,
        }}
      >
        <div
          className="absolute w-full h-full
                left-0 top-0 z-[1]
                bg-[#121212bb]"
        />
        <div className="w-full flex justify-between relative z-[2]">
          <p
            className={`text-[#8c8c8c] font-urwgeometric
            md:text-[8.4px] lg:text-[11.2px] xl:text-[14px] ${isSuccessPage ? "!text-[14px]" : ""}`}
          >
            {getMonthName(selectedDay?.month)},{" "}
            <span className="text-[#A1EA04]">{selectedDay?.day}</span>
          </p>
          <p
            className={`text-[#8c8c8c] font-urwgeometric
            md:text-[6px] lg:text-[8px] xl:text-[10px] ${isSuccessPage ? "!text-[10px]" : ""}`}
          >
            {getWeekDay(selectedDay)},{" "}
            <span className="text-[#A1EA04]">
              {availableTimes[selectedStartTime]} - {availableTimes[selectedEndTime + 3]}
            </span>
          </p>
        </div>
        <div
          className={`bg-[#ebe9e93b] h-[2px] w-full
          relative z-[3]
          md:my-[7.2px] lg:my-[9.6px] xl:my-[12px] ${isSuccessPage ? "!my-[12px]" : ""}`}
        />
        <div
          className="flex flex-col gap-y-[4px]
                relative z-[2]"
        >
          <p
            className={`font-urwgeometric_bold
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
            text-[#8c8c8c] leading-[100%] ${isSuccessPage ? "!text-[24px]" : ""}`}
          >
            {selectedStudio?.name}
          </p>
          <p
            className={`text-[#a1ea04] font-urwgeometric_bold
            md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]
            leading-[100%] ${isSuccessPage ? "!text-[14px]" : ""}`}
          >
            Electric Lady Studios
          </p>
          <div className="flex items-center gap-x-[5px]">
            <Media
              type="image"
              link="/images/BookSession/gray-users.svg"
              blurLink="/images/BookSession/gray-users.png"
              containerClasses={`md:w-[9.6px] lg:w-[12.8px] xl:w-[16px] aspect-[1/1] ${
                isSuccessPage ? "!w-[16px]" : ""
              }`}
            />
            <p
              className={`text-[#8c8c8c] 
              md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] ${
                isSuccessPage ? "!text-[12px]" : ""
              }`}
            >
              {selectedStudio?.userNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookedStudio
