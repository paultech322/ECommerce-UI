import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import ClipSpan from "../../../ClipSpan"
import { useBookProject } from "../../../../providers/BookProjectProvider"

const BookedProject = () => {
  const router = useRouter()
  const { projectName, trackList } = useBookProject()

  return (
    <div className="h-full flex flex-col">
      <div
        className="bg-[#121211cc] md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
      relative pl-[48px] py-[20px] pr-[24px] mt-[40px]
      w-[80%] self-end"
      >
        <Media
          type="image"
          link="/images/Common/success.svg"
          blurLink="/images/Common/success.png"
          containerClasses="w-[168px] h-[148px] !absolute left-[-100px] top-[-30px]"
        />
        <p className="text-[#d2d2d2] text-[20px] font-urwgeometric">{projectName}</p>
        <p className="text-[#8c8c8c] text-[10px] font-urwgeometric pt-[4px]">
          Consisting of {trackList.length} tracks:
        </p>

        <ul className="pt-[12px] pl-[20px]">
          {trackList.map((track, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i} className="text-[#d2d2d2] text-[12px] font-urwgeometric list-disc">
              {track.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow flex flex-col justify-end">
        <p
          className="font-urwgeometric_medium
                text-[64px] text-[#d2d2d2] pb-[15px]
                leading-[90%]"
        >
          Your project got <br />
          <ClipSpan> submitted</ClipSpan>.
        </p>
        <p
          className="text-[16px] text-[#D2D2D2]
                        font-urwgeometric_medium
                        pt-[1.5vh]"
        >
          <ClipSpan>Electric Lady Studios</ClipSpan> has received your project inquiry. Please allow
          up to 48
          <br />
          hours for the studio to review your details and get back to you.
        </p>
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
    </div>
  )
}

export default BookedProject
