import Media from "../../shared/Media"

const TwitterButton = () => (
  <button
    className="bg-[#d2d2d20f] rounded-full
            w-[59px] samsungS8:w-[66.46px] xs:w-[72px] aspect-[1/1]
            flex items-center justify-center
            border-r-[#d2d2d20f] border-r-[1px]
            border-l-[#d2d2d20f] border-l-[1px]
            border-b-[2px] border-b-[#d2d2d20f]
            shadow-[13.5px_13.5px_36px_0px_#15151499,-13.5px_-13.5px_36px_0px_#40403b33]"
    type="button"
  >
    <Media
      type="image"
      link="/images/Social/twitter.svg"
      blurLink="/images/Social/twitter.png"
      containerClasses="w-[28px] h-[28px]"
    />
  </button>
)

export default TwitterButton
