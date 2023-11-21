/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useBookSession } from "../../../../providers/BookSessionProvider"
import Button from "../../../../shared/Button"
import HourMin from "../HourMin"
import StartingPrice from "../StratingPrice"
import StudioName from "../StudioName"

const SingleStudio = ({ className = "", data, hasEquipmentButton = false }) => {
  const { openEquipmentModal, setCurStep, STEPS, setSelectedStudio } = useBookSession()

  return (
    <div
      className={`md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
      relative w-full overflow-hidden
      md:h-[120px] lg:h-[160px] xl:h-[200px] flex
      hover:border hover:border-[#a1ea04] ${className}`}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`w-full h-full cursor-pointer
        absolute left-0 top-0 z-[2]
        hover:scale-[1.1] transition duration-[300ms]
        bg-cover bg-[#d2d2d20f]`}
        style={{
          backgroundImage: `url('${data?.img}')`,
        }}
        onClick={() => {
          setSelectedStudio(data)
          setCurStep(STEPS.CHOOSE_DATE)
        }}
      />
      {hasEquipmentButton && (
        <Button
          id="see-equipment"
          type="button"
          className="md:w-[52.2px] lg:w-[69.6px] xl:w-[87px] 
        aspect-[87/30] !absolute bg-none bg-[#121211cc]
        shadow-[0px_12px_24px_0px_#0000003d]
        md:top-[12px] lg:top-[16px] xl:top-[20px] 
        md:right-[12px] lg:right-[16px] xl:right-[20px] z-[3]
        text-[#D2D2D2] font-urwgeometric_bold
        md:!text-[9.6px] lg:!text-[12.8px] xl:!text-[16px]
        rounded-full backdrop-blur-[20px]"
          pulseColor="white"
          onClick={() => openEquipmentModal(data)}
        >
          Details
        </Button>
      )}
      <div
        className="w-full h-full
              z-[3] relative
              pointer-events-none
              flex items-end"
      >
        <div
          className="bg-[#121211cc]
                  md:py-[6px] lg:py-[8px] xl:py-[10px] 
                  md:px-[12px] lg:px-[16px] xl:px-[20px]
                  md:rounded-b-[14.4px] lg:rounded-b-[19.2px] xl:rounded-b-[24px]
                  rounded-t-0 w-full
                  border-r-[#d2d2d20f] border-r-[1px]
                  border-l-[#d2d2d20f] border-l-[1px]
                  border-b-[2px] border-b-[#d2d2d20f]
                  backdrop-blur-[20px]
                  flex justify-between items-center"
        >
          <StudioName name={data?.name} />
          <div className="flex items-center md:gap-x-[6px] lg:gap-x-[8px] xl:gap-x-[10px]">
            <HourMin />
            <StartingPrice value={data?.initPrice} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleStudio
