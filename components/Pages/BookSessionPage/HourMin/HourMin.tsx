import Media from "../../../../shared/Media"

const HourMin = () => (
  <div className="flex items-center">
    <div
      className="md:w-[7.2px] lg:w-[9.6px] xl:w-[12px] aspect-[1/1]
            rounded-full overflow-hidden"
    >
      <Media
        type="image"
        link="/images/BookSession/info.svg"
        blurLink="/images/BookSession/info.png"
        containerClasses="md:w-[6px] lg:w-[8px] xl:w-[10px] aspect-[1/1]"
      />
    </div>
    <p className="font-urwgeometric md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] text-[#d2d2d2]">
      4 hours <span className="text-[#8c8c8c]">min.</span>
    </p>
  </div>
)

export default HourMin
