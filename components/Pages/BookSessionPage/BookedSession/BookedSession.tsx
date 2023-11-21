import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import BookedStudio from "../BookedStudio"
import ClipSpan from "../../../ClipSpan"

const BookedSession = () => {
  const router = useRouter()

  return (
    <>
      <div>
        <Media
          type="image"
          link="/images/Common/success.svg"
          blurLink="/images/Common/success.png"
          containerClasses="w-[168px] h-[148px]"
        />
        <p
          className="font-urwgeometric_medium
          text-[64px] text-[#d2d2d2] pb-[15px]
          leading-[90%]"
        >
          <ClipSpan>Session</ClipSpan> requested.
        </p>
        <p
          className="font-urwgeometric text-[16px]
            text-[#d2d2d2]"
        >
          You successfully requested your Session. The studio will get back to you very soon
          <br />
          and accept or deny your request. We’ve also sent you an email.
        </p>
      </div>
      <BookedStudio className="!h-[140px] !rounded-[32px]" />
      <div
        className="flex-grow flex
          flex-col justify-end"
      >
        <Button
          id="back-book-type"
          type="button"
          className="w-full md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
          text-black font-urwgeometric_bold
          border-r-[1px] border-r-[#A1EA04]
          border-l-[1px] border-l-[#A1EA04]
          border-b-[2px] border-b-[#A1EA04]
          shadow-[0px_0px_40px_0px_#a1ea0466]
          md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]
          md:mt-[14.4px] lg:mt-[19.2px] xl:mt-[24px]"
          pulseColor="white"
          onClick={() => router.push("/booktype")}
        >
          Back to the Studio
        </Button>
      </div>
    </>
  )
}

export default BookedSession
