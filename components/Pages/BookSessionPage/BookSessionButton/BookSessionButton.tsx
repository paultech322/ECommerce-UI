import Button from "../../../../shared/Button"
import { useBookSession } from "../../../../providers/BookSessionProvider"
import Media from "../../../../shared/Media"

const BookSessionButton = () => {
  const { setCurStep, STEPS } = useBookSession()

  return (
    <div className="flex-grow flex justify-end flex-col">
      <div
        className="bg-[#d2d2d20f] rounded-full w-full self-center
      py-[8px] px-[12px] flex items-center justify-center"
      >
        <Media
          type="image"
          link="/images/BookSession/light-info.svg"
          blurLink="/images/BookSession/light-info.png"
          containerClasses="w-[25px] aspect-[25/24]"
        />
        <p className="text-[#d2d2d2] md:text-[6px] lg:text-[8px] xl:text-[10px]">
          Payment will be processed once the studio has accepted your Session
        </p>
      </div>
      <Button
        id="select-session"
        type="button"
        className="w-full md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
          text-black font-urwgeometric_bold
          border-r-[1px] border-r-[#A1EA04]
          border-l-[1px] border-l-[#A1EA04]
          border-b-[2px] border-b-[#A1EA04]
          shadow-[0px_0px_40px_0px_#a1ea0466]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          md:mt-[12px] lg:mt-[16px] xl:mt-[20px]"
        pulseColor="white"
        onClick={() => setCurStep(STEPS.SUCCESS_BOOKED)}
      >
        Request Session
      </Button>
    </div>
  )
}

export default BookSessionButton
