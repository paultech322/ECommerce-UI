import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import StudioHeader from "../Header/StudioHeader"

const FullLayout = ({ children }: ILayout) => (
  <div
    className="w-screen min-h-screen
      relative
      bg-[url('/images/Layout/d_bg.png')]
      bg-cover bg-[100%_auto]
      bg-[bottom_right]
      overflow-hidden
      flex"
  >
    <SeoHead
      title="SESSION"
      description="Book your next studio session today"
      image="/images/seo_logo.png"
    />
    <div
      className="w-[640px] h-screen
      bg-[#1A1A18]
      flex flex-col px-[60px] py-[5vh]
      bg-gradient-to-b bg-gradient-[180deg]
      from-[#a1ea0400] via-[#a1ea0405] to-[#a1ea041a]
      from-0% via-75% to-100%"
    >
      <StudioHeader />
      <div
        className="flex-grow pt-[3vh] h-full
        flex flex-col"
      >
        {children}
      </div>
    </div>
  </div>
)

export default FullLayout
