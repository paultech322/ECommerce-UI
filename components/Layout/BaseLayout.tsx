import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import BaseHeader from "../Header/BaseHeader"

const BaseLayout = ({ children }: ILayout) => (
  <div
    className="w-screen h-screen
      relative bg-[url('/images/Layout/d_bg.png')]
      bg-cover bg-[100%_auto]
      bg-[bottom_right] overflow-x-hidden"
  >
    <SeoHead
      title="SESSION"
      description="Book your next studio session today"
      image="/images/seo_logo.png"
    />
    <BaseHeader />
    <div
      className="w-screen min-h-screen
      bg-[#121211cc] overflow-y-auto overflow-x-hidden
      flex justify-center"
    >
      <div className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] pb-[50px] pt-[160px]">
        {children}
      </div>
    </div>
  </div>
)

export default BaseLayout
