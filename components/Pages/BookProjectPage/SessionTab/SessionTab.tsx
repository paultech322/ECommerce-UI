import { useRouter } from "next/router"
import Media from "../../../../shared/Media"
import ClipSpan from "../../../ClipSpan"

const SessionTab = () => {
  const router = useRouter()

  return (
    <button
      className="md:w-[144px] lg:w-[192] xl:w-[240px] 
      aspect-[240/48]
      pt-[1px] px-[1.5px] pb-[2.5px]
      rounded-full relative overflow-hidden
      cursor-pointer"
      type="button"
      onClick={() => router.push("/booksession")}
    >
      <div
        className="bg-gradient-to-r
              from-transparent via-[#DAEB02] to-transparent
              w-[100%] h-[250%] translate-y-[-40px]
              rotate-[3deg]
              from-[5%] via-[20%] to-[90%] z-[2]
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
          link="/images/BookSession/symbol.svg"
          blurLink="/images/BookSession/symbol.png"
          containerClasses="md:w-[20.4px] lg:w-[27.2px] xl:w-[34px]
          aspect-[1/1]"
        />
        <p
          className="font-urwgeometric_bold text-[#d2d2d2]
          md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]
          pt-[4px] xl:pt-[8px] leading-[100%]
          pt-[8px]"
        >
          Only need one session?
          <br />
          Switch to <ClipSpan className="border-b border-b-[#a1ea04]">Session</ClipSpan>.
        </p>
      </div>
    </button>
  )
}

export default SessionTab
