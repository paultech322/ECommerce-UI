import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import ClipSpan from "../../../ClipSpan"
import USDAmount from "../USDAmount"

const BookSession = () => {
  const router = useRouter()

  return (
    <div
      className="border-r-[#d2d2d20f] border-r-[1px]
      border-l-[#d2d2d20f] border-l-[1px]
      border-b-[2px] border-b-[#d2d2d20f]
      bg-[#d2d2d20f] w-full
      md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px] 
      md:p-[12px] lg:p-[16px] xl:p-[20px]
      flex flex-col justify-between"
    >
      <div>
        <div className="flex gap-x-0 items-center translate-x-[-10px]">
          <Media
            type="image"
            link="/images/BookType/symbol.svg"
            blurLink="/images/BookType/symbol.png"
            containerClasses="lg:w-[41px] md:w-[30.75px] aspect-[41/51]"
          />
          <p
            className="md:text-[14.4px] lg:text-[19.2px] xl:text-[24px] 
            text-[#d2d2d2] font-urwgeometric_bold
            leading-[100%]"
          >
            Session
          </p>
        </div>
        <p
          className="font-urwgeometric_medium
          md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] text-[#d2d2d2]"
        >
          <ClipSpan>Pay per hour.</ClipSpan> Use the time according to your needs.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-y-[8px]">
          <p
            className="text-[#8c8c8c] font-urwgeometric leading-[100%]
          md:text-[9.6px] lg:text-[11.2px] xl:text-[14px]"
          >
            Starting from
          </p>
          <USDAmount amount={80} label="hour" />
        </div>
        <Button
          id="select-session"
          type="button"
          className="w-full
            md:h-[21.6px] lg:h-[28.8px] xl:h-[36px]
            text-black font-urwgeometric_bold
            border-r-[1px] border-r-[#A1EA04]
            border-l-[1px] border-l-[#A1EA04]
            border-b-[2px] border-b-[#A1EA04]
            shadow-[0px_0px_40px_0px_#a1ea0466]
            md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]
            md:mt-[14.4px] lg:mt-[19.2px] xl:mt-[24px]"
          pulseColor="white"
          onClick={() => router.push("/booksession")}
        >
          Book a session
        </Button>
      </div>
    </div>
  )
}

export default BookSession
