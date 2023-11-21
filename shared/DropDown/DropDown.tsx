import Button from "../../shared/Button"
import Media from "../../shared/Media"
import Radiobox from "../../shared/Radiobox"

const DropDown = ({ title, isVisibleDropDown, toggleDropDown, options, value, onChange }) => (
  <div
    className={`!fixed top-0 left-0 w-screen h-screen z-40
        bg-[#121211cc] flex justify-end
        shadow-[0px_12px_24px_0px_#0000003d]
        ${isVisibleDropDown ? "block" : "hidden"}`}
  >
    <div
      className="w-[640px] h-full bg-[#1A1A18]
            flex flex-col"
    >
      <div
        className="md:px-[36px] lg:px-[48px] xl:px-[60px]
                py-[5vh]
                flex flex-col
                md:gap-y-[19.2px] lg:gap-y-[25.6px] xl:gap-y-[32px]"
      >
        <button
          type="button"
          className="border-r-[#d2d2d20f] border-r-[1px]
            border-l-[#d2d2d20f] border-l-[1px] self-end
            border-b-[2px] border-b-[#d2d2d20f] bg-[#d2d2d20f]
            w-[44px] aspect-[1/1] flex justify-center items-center
            shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
            rounded-full"
          onClick={toggleDropDown}
        >
          <Media
            type="image"
            link="/images/Common/close.svg"
            blurLink="/images/Common/close.png"
            containerClasses="md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]
                            sefl-end"
          />
        </button>
        <p
          className="md:text-[28.8px] lg:text-[38.4px] xl:text-[48px] capitalize
                    text-[#d2d2d2] font-urwgeometric"
        >
          {title}
        </p>
      </div>
      <div className="flex-grow bg-[#121211cc] overflow-y-auto">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option)}
            className="px-[60px] py-[20px] border-t-[1px] border-t-[#d2d2d20f]
                        w-full flex items-center gap-x-[10px]"
          >
            <Radiobox checked={option.value === value} id={option.value} readOnly />
            <p
              className="text-[#d2d2d2] font-urwgeometric
                            text-[16px]"
            >
              {option.label}
            </p>
          </button>
        ))}
      </div>
      <div
        className="md:px-[36px] lg:px-[48px] xl:px-[60px]
      py-[5vh]"
      >
        {isVisibleDropDown && (
          <Button
            id="select-confirm"
            type="button"
            className="w-full h-[48px]
              font-urwgeometric_bold text-[16px]
              !text-black backdrop-blur-[20px]
              shadow-[0px_12px_24px_0px_#0000003d]
              rounded-full bg-[#d2d2d20f]"
            pulseColor="white"
            onClick={toggleDropDown}
          >
            Confirm
          </Button>
        )}
      </div>
    </div>
  </div>
)

export default DropDown
