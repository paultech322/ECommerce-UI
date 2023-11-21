import Media from "../../../../shared/Media"

const ReservingSpot = () => (
  <div
    className="w-full h-[36px]
            text-black font-urwgeometric_bold
            rounded-full bg-none !bg-[#d2d2d20f]
            shadow-[0px_12px_24px_0px_#0000003d]
            md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
  >
    <div
      className="w-full h-full items-center
                flex items-center gap-x-[5px] justify-center"
    >
      <Media
        type="image"
        link="/images/BookSession/light-info.png"
        blurLink="/images/BookSession/light-info.png"
        containerClasses="w-[25px] aspect-[25/24]"
      />
      <p className="font-urwgeometric text-[12px] text-[#8C8C8C]">
        We are reserving this spot for you for <span className="text-[#d2d2d2]">14:52 minutes</span>
      </p>
    </div>
  </div>
)

export default ReservingSpot
