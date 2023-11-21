import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import MobileHeader from "../Header/MobileHeader/MobileHeader"

const MobileLayout = ({ children }: ILayout) => (
  <div
    className="w-screen h-screen bg-[#1A1A18]
      relative bg-[url('/images/Layout/m_bg.png')]
      bg-cover bg-[100%_auto]
      bg-[bottom_left] overflow-x-hidden"
  >
    <SeoHead
      title="SESSION"
      description="Book your next studio session today"
      image="/images/seo_logo.png"
    />
    <MobileHeader />
    <div
      className="absolute w-screen h-screen 
    bg-gradient-[180deg] bg-[#121211cc]
    bg-gradient-to-b from-[#a1ea0400] via-[#a1ea0405] to-[#a1ea041a]
    from-[0%] via-[75%] to-[100%] z-[1]"
    />
    <div
      className="w-screen h-screen
      overflow-hidden flex flex-col justify-end
      px-[20px] py-[20px] xs:py-[32px] relative z-[2]"
    >
      {children}
    </div>
  </div>
)

export default MobileLayout
