import { useBookSession } from "../../../../providers/BookSessionProvider"

const StartTimeSelector = () => {
  const { availableTimes, selectedStartTime, setSelectedStartTime } = useBookSession()

  return (
    <div
      className="w-full 
        md:rounded-[19.2px] lg:rounded-[25.6px] xl:rounded-[32px]
        overflow-hidden"
    >
      <div
        className="flex justify-center 
        md:p-[12px] lg:p-[16px] xl:p-[20px]
        bg-[#d2d2d20f]"
      >
        <p
          className="font-urwgeometric_bold 
                text-[#d2d2d2]
                md:text-[12px] lg:text-[16px] xl:text-[20px]"
        >
          Start Time
        </p>
      </div>
      <div
        className="md:p-[12px] lg:p-[16px] xl:p-[20px]
        grid grid-cols-3 
        md:gap-[12px] lg:gap-[16px] xl:gap-[20px]
        bg-[#12121166] 
        md:min-h-[194.2px] lg:min-h-[227px] xl:min-h-[285px]"
      >
        {availableTimes.slice(0, 12).map((time, i) => (
          <button
            className={`flex items-center bg-[#d2d2d20f]
                    rounded-full justify-center
                    md:py-[4.8px] lg:py-[6.4px] xl:py-[8px]
                    cursor-pointer h-fit
                    text-[#d2d2d2] hover:!text-[#121212]
                    md:text-[12px] lg:text-[16px] xl:text-[20px]
                    transition duration-[200ms]
                    hover:bg-[#A1EA04]
                    ${selectedStartTime === i + 1 ? "!bg-[#A1EA04] !text-[#121212]" : ""}`}
            type="button"
            key={time}
            onClick={() => setSelectedStartTime(i + 1)}
          >
            <p className="font-urwgeometric_bold">{time}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default StartTimeSelector
