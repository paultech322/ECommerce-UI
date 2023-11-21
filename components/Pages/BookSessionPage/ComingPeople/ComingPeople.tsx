import { useBookSession } from "../../../../providers/BookSessionProvider"
import Input from "../../../../shared/Input"
import Media from "../../../../shared/Media"

const ComingPeople = () => {
  const { comingPeople, setComingPeople, selectedStudio } = useBookSession()
  return (
    <div className="w-full md:py-[24px] lg:py-[32px] xl:py-[40px]">
      <p
        className="text-[#d2d2d2] font-urwgeometric_bold leading-[100%]
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
            md:pb-[12px] lg:pb-[16px] xl:pb-[20px]"
      >
        How many people are
        <br />
        coming to the studio?{" "}
        <span
          className="text-[#8c8c8c] font-urwgeometric leading-[100%] pt-[4px]
            md:pb-[12px] lg:pb-[16px] xl:pb-[20px]
            md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
        >
          (Max. 6)
        </span>
      </p>
      <div className="relative h-full w-full">
        <Input
          id="coming-people"
          value={comingPeople || "0"}
          onChange={(e) => setComingPeople(e.target.value)}
          containerClassName="w-full md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
                                border-l-[1px] border-l-[#d2d2d20f]
                                border-r-[1px] border-r-[#d2d2d20f]
                                border-b-[2px] border-b-[#d2d2d20f]
                                shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
                                backdrop-blur-[12px] px-[25px]
                                bg-[#d2d2d20f]"
          className="outline-none
                                text-[#8c8c8c]
                                font-urwgeometric
                                focus:!ring-0 focus:!border-none
                                placeholder:text-[14px]
                                placeholder:text-[#8c8c8c]
                                px-[30px]"
        />
        <div
          className="absolute top-0 left-0 w-fit h-full
         flex justify-between items-center
         md:pl-[12px] lg:pl-[16px] xl:pl-[20px]
         pb-[7px]"
        >
          <Media
            type="image"
            link="/images/BookSession/coming-people.svg"
            blurLink="/images/BookSession/coming-people.png"
            containerClasses="w-[29px] aspect-[29/27]"
          />
        </div>
        <div
          className="absolute top-0 right-0 w-fit h-full
                flex justify-between items-center z-[3]
                md:pr-[12px] lg:pr-[16px] xl:pr-[20px]"
        >
          <div className="flex gap-x-[8px] items-center">
            <button
              type="button"
              className="bg-[#1A1A18] rounded-full
                            flex items-center justify-center
                            md:w-[19.2px] lg:w-[25.6px] xl:w-[32px]
                            aspect-[1/1]"
              onClick={() => {
                setComingPeople(comingPeople - 1)
              }}
              disabled={comingPeople === 1}
            >
              <p
                className={`text-[20px] leading-[100%] pb-[4px] ${
                  comingPeople === 1 ? "text-[#8c8c8c] cursor-not-allowed" : "text-[#d2d2d2]"
                }`}
              >
                -
              </p>
            </button>
            <button
              type="button"
              className="bg-[#1A1A18] rounded-full
                            flex items-center justify-center
                            md:w-[19.2px] lg:w-[25.6px] xl:w-[32px]
                            aspect-[1/1]"
              onClick={() => setComingPeople(comingPeople + 1)}
              disabled={comingPeople === selectedStudio?.userNumber}
            >
              <p
                className={`text-[20px] leading-[100%] pb-[4px] ${
                  comingPeople === selectedStudio?.userNumber
                    ? "text-[#8c8c8c] cursor-not-allowed"
                    : "text-[#d2d2d2]"
                }`}
              >
                +
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingPeople
