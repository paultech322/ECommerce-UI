import Media from "../../shared/Media"
import Button from "../../shared/Button"

const Header = () => (
  <>
    <Media
      type="image"
      link="/images/Header/music-medium-logo.svg"
      blurLink="/images/Header/music-medium-logo.png"
      containerClasses="md:w-[135px] md:h-[53px]
      xs:w-[100px] samsungS8:w-[96px] w-[85.3px]
      aspect-[135/53]"
    />
    <Button
      id="logo-btn"
      type="button"
      className="!w-[179.2px] samsungS8:!w-[201.6px] xs:!w-[210px] aspect-[210/40]
            font-urwgeometric_bold text-[14px] xs:text-[16px]
            !text-[#a1ea04] backdrop-blur-[20px]
            shadow-[0px_12px_24px_0px_#0000003d]
            rounded-full bg-none bg-[#d2d2d20f]"
      pulseColor="white"
    >
      <p className="drop-shadow-[0px_0px_24px_#a1ea0499]">Electric Lady Studios, NY</p>
    </Button>
  </>
)

export default Header
