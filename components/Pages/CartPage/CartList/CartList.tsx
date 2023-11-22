import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import Content from "../../../Layout/Content"
import WhyVerseDetail from "./WhyVerseDetail"
import useIsMobile from "../../../../hooks/useIsMobile"

const CartList = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="w-screen relative
            flex items-center justify-center
            flex-col 
            pb-[50px] md:pb-0"
    >
      <div
        className="absolute
      md:left-0 md:bottom-[2px]
      right-0 bottom-[30px]"
      >
        <Media
          type="image"
          link={isMobile ? "/images/WhyVerse/bottom_dot.png" : "/images/WhyVerse/d_bottom_dot.png"}
          blurLink={
            isMobile ? "/images/WhyVerse/bottom_dot.png" : "/images/WhyVerse/d_bottom_dot.png"
          }
          containerClasses="xl:w-[187px] xl:h-[69px]
            lg:w-[149.6px] lg:w-[55.2px]
            md:w-[112.2px] md:h-[41.4px]
            w-[70px] h-[109px]"
        />
      </div>
      <WhyVerseDetail />
      <FadeInWhenVisible>
        <Content
          className="relative z-[10] 
          md:pb-[120px] lg:pb-[160px] xl:pb-[200px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[40px]" data-aos="fade-up" />
        </Content>
      </FadeInWhenVisible>
    </div>
  )
}

export default CartList
