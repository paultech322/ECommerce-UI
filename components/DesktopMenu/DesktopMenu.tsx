import Link from "next/link"
import Media from "../../shared/Media"
import DesktopExplore from "../DesktopExplore"
import Switch from "../../shared/Switch"
import { useTheme } from "../../providers/ThemeProvider"

const DesktopMenu = () => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const onToggle = () => {
    onChangeThemeConfig()
  }

  return (
    <div
      className="xl:max-w-[1280px] lg:max-w-[95%] md:max-w-[768px]
          w-full 
          flex justify-between items-center
          font-poppins_medium
          py-[20px]"
    >
      <div
        className="flex items-center 
      xl:gap-x-[60px]
      lg:gap-x-[54px]
      md:gap-x-[36px]"
      >
        <Link href="/">
          <div className="flex items-center gap-x-[10px]">
            <Media
              type="image"
              link="/images/Header/Desktop/logo.svg"
              blurLink="/images/Header/Desktop/logo.png"
              containerClasses="w-[53px] h-[58px]"
            />
            <p
              className="text-[30px]
              uppercase 
              text-[#73B3C2]
              font-poppins_bold"
            >
              Financial <span className="text-[#B4DCE3]">Verse</span>
            </p>
          </div>
        </Link>
      </div>
      <DesktopExplore />
      <div className="flex justify-center gap-x-[40px] items-center">
        <div className="flex justify-center gap-x-[5px]">
          <p
            className="font-poppins_medium text-[18px] 
          text-[#484848] dark:text-[white]
          capitalize"
          >
            {themeMode} Mode
          </p>
          <Switch id="theme-selector" onClick={onToggle} value={themeMode === "dark"} />
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
