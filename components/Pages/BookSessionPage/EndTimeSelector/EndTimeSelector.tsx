import { useBookSession } from "../../../../providers/BookSessionProvider"

const EndTimeSelector = () => {
  const { availableTimes, setSelectedEndTime, selectedStartTime, selectedEndTime } =
    useBookSession()

  return (
    <div
      className="w-full
      md:rounded-[19.2px] lg:rounded-[25.6px] xl:rounded-[32px]
      overflow-hidden
      flex-col flex"
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
          End Time
        </p>
      </div>
      <div
        className="md:p-[12px] lg:p-[16px] xl:p-[20px]
        grid grid-cols-3 
        md:gap-[12px] lg:gap-[16px] xl:gap-[20px]
        bg-[#12121166]
        md:min-h-[194.2px] lg:min-h-[227px] xl:min-h-[285px]"
      >
        {selectedStartTime ? (
          availableTimes.slice(selectedStartTime + 3, availableTimes.length).map((time, i) => (
            <button
              className={`flex items-center bg-[#d2d2d20f]
                    rounded-full justify-center
                    md:py-[4.8px] lg:py-[6.4px] xl:py-[8px]
                    cursor-pointer h-fit
                    md:text-[12px] lg:text-[16px] xl:text-[20px]
                    text-[#d2d2d2] hover:!text-[#121212]
                    transition duration-[200ms]
                    hover:bg-[#A1EA04]
                    ${
                      selectedEndTime === selectedStartTime + i
                        ? "!bg-[#A1EA04] !text-[#121212]"
                        : ""
                    }`}
              type="button"
              key={time}
              onClick={() => setSelectedEndTime(selectedStartTime + i)}
            >
              <p className="font-urwgeometric_bold">{time}</p>
            </button>
          ))
        ) : (
          <div
            className="h-full w-full col-span-3
                flex justify-center items-center"
          >
            <p
              className="font-urwgeometric_bold
                    text-[#d2d2d2] text-center
                    md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
            >
              Please select a Start Time first
              <br />
              to see the available End Times.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EndTimeSelector
