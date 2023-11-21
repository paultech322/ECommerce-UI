import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import ClipSpan from "../../../ClipSpan"
import ProgressBar from "../../../../shared/ProgressBar"

const Success = () => {
  const router = useRouter()

  return (
    <>
      <div className="pt-[20px]">
        <ProgressBar value={100} />
        <Media
          type="image"
          link="/images/Common/success.svg"
          blurLink="/images/Common/success.png"
          containerClasses="w-[168px] h-[148px] mt-[40px]"
        />
        <p
          className="font-urwgeometric_medium leading-[64px]
        text-[48px] text-[#d2d2d2] pt-[40px]"
        >
          Congratulations!
        </p>
        <p
          className="font-urwgeometric text-[14px]
      text-[#d2d2d2] pt-[20px]"
        >
          <ClipSpan>{`You're all set.`}</ClipSpan> Simply click the button bellow to begin the
          booking process.
        </p>
      </div>
      <div
        className="flex-grow flex
    flex-col justify-end"
      >
        <Button
          id="redirect-to-book"
          type="submit"
          className="w-full h-[48px]
          text-black font-urwgeometric_bold
          border-r-[1px] border-r-[#A1EA04]
          border-l-[1px] border-l-[#A1EA04]
          border-b-[2px] border-b-[#A1EA04]
          shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
          onClick={() => router.push("/booktype")}
        >
          Book
        </Button>
      </div>
    </>
  )
}

export default Success
