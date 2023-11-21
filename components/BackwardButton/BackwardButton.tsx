import Media from "../../shared/Media"

const BackwardButton = ({ className = "", onClick }) => (
  <button
    className={`bg-[#272a232e] rounded-full
        w-[44px] h-[44px] 
        border-r-[#d2d2d20f] border-r-[1px]
        border-l-[#d2d2d20f] border-l-[1px]
        border-b-[2px] border-b-[#d2d2d20f]
        flex items-center justify-center
        shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
        ${className}`}
    type="button"
    onClick={onClick}
  >
    <Media
      type="image"
      link="/images/Common/backward.svg"
      blurLink="/images/Common/backward.png"
      containerClasses="w-[24px] h-[24px]"
    />
  </button>
)

export default BackwardButton
