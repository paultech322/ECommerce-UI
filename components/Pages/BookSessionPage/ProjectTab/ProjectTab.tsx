import { useRouter } from "next/router"
import Media from "../../../../shared/Media"

const ProjectTab = () => {
  const router = useRouter()

  return (
    <button
      className="md:w-[144px] lg:w-[192px] xl:w-[240px]
      aspect-[240/48]
      pt-[1px] px-[1px] pb-[2px]
      rounded-full relative overflow-hidden
      cursor-pointer"
      onClick={() => router.push("/bookproject")}
      type="button"
    >
      <div
        className="bg-gradient-to-r
              from-[#ff6a2b3d] via-[#FF6A2B] to-[#ff6a2b3d]
              w-[100%] h-[250%] translate-y-[-40px]
              rotate-[3deg]
              opacity-[0.6]
              from-[10%] via-[30%] to-[100%]
              z-[1]
              absolute left-0 top-0"
      />
      <div
        className="bg-gradient-to-r
              from-[#121211] to-transparent to-[#121211]
              w-[100%] h-[250%] translate-y-[-40px]
              rotate-[3deg]
              from-[30%] via-[40%] to-[100%]
              opacity-[0.5]
              z-[3]
              absolute left-0 top-0"
      />
      <div
        className="w-full h-full relative
              from-[#2525278c] via-[#2525278c] to-[#2525278c]
              bg-gradient-to-r
              flex items-center justify-center
              backdrop-blur-[6px]
              z-[4] rounded-full"
      >
        <Media
          type="image"
          link="/images/BookSession/star.svg"
          blurLink="/images/BookSession/star.png"
          containerClasses="md:w-[26.4px] lg:w-[35.2px] xl:w-[44px]
          aspect-[1/1]"
        />
        <p
          className="font-urwgeometric_bold text-[#d2d2d2] 
          md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]
          pt-[4px] xl:pt-[8px] leading-[100%]"
        >
          Need multiple Sessions?
          <br />
          Switch to <span className="text-[#FF6A2B] underline">Projects</span>.
        </p>
      </div>
    </button>
  )
}

export default ProjectTab
