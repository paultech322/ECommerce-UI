import Media from "../../../../shared/Media"

const TrackItem = ({ label, selected = false, toggleItem }) => (
  <button
    className="flex flex-col gap-y-[12px] items-center cursor-pointer"
    onClick={toggleItem}
    type="button"
  >
    <p className="md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] font-urwgeometric text-[#8c8c8c]">
      {label}
    </p>
    <div
      className="rounded-full flex justify-center items-center
            border-r-[#d2d2d20f] border-r-[1px]
            border-l-[#d2d2d20f] border-l-[1px]
            border-b-[2px] border-b-[#d2d2d20f] bg-[#d2d2d20f] backdrop-blur-[20px]
            shadow-[13.5px_13.5px_36px_0px_#15151499,-13.5px_-13.5px_36px_0px_#40403b33]
            md:w-[26.4px] lg:w-[35.2px] xl:w-[44px] aspect-[1/1]"
    >
      {selected && (
        <div
          className="w-[32px] aspect-[1/1] bg-gradient-[270deg]
                bg-gradient-to-r from-[#A1EA04] to-[#DAEB02] rounded-full
                from-[-0.02%] to-[100.01%] flex justify-center items-center"
        >
          <Media
            type="image"
            link="/images/BookProject/check.svg"
            blurLink="/images/BookProject/check.png"
            containerClasses="md:h-[12px] lg:h-[16px] xl:h-[20px] aspect-[21/20]"
          />
        </div>
      )}
    </div>
  </button>
)

export default TrackItem
