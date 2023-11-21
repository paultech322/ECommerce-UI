import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import ClipSpan from "../../../ClipSpan"
import USDAmount from "../USDAmount"

const BookProject = () => {
  const router = useRouter()

  return (
    <div
      className="border-r-[#d2d2d20f] border-r-[1px]
      border-l-[#d2d2d20f] border-l-[1px]
      border-b-[2px] border-b-[#d2d2d20f]
      bg-[#d2d2d208] w-full
      md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px] 
      md:p-[12px] lg:p-[16px] xl:p-[20px]
      flex flex-col justify-between
      md:h-[200px] lg:h-[230px] xl:h-[280px]"
    >
      <div>
        <div
          className="flex gap-x-0 items-center
                translate-x-[-10px]"
        >
          <Media
            type="image"
            link="/images/BookType/project.svg"
            blurLink="/images/BookType/project.png"
            containerClasses="lg:w-[44px] md:w-[33px] aspect-[1/1]"
          />
          <p
            className="md:text-[14.4px] lg:text-[19.2px] xl:text-[24px] 
            text-[#d2d2d2] font-urwgeometric_bold leading-[100%]"
          >
            Project
          </p>
        </div>
        <p
          className="font-urwgeometric_medium
          md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] text-[#d2d2d2]
          text-[#d2d2d2]"
        >
          <ClipSpan
            className="bg-gradient-to-r from-[#FF6A2B] to-[#FF442B]
          bg-gradient-[90deg] from-[0%] to-[101.96%]"
          >
            Partner with the studio on a project-basis.
          </ClipSpan>{" "}
          Receive full-service from writing and
          <br />
          production to the final master of your song, EP, or album.
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
          <div className="w-full flex justify-between items-center">
            <USDAmount amount={300} label="track" />
            <div
              className="bg-[#d2d2d20f] rounded-full
            flex items-center gap-x-[8px]
            md:px-[7.2px] lg:px-[9.6px] xl:px-[12px] 
            md:py-[4.8px] lg:py-[6.4px] xl:py-[8px]"
            >
              <Media
                type="image"
                link="/images/BookType/info.svg"
                blurLink="/images/BookType/info.png"
                containerClasses="w-[12px] aspect-[1/1]"
              />
              <p
                className="text-[#d2d2d2] 
              md:text-[6px] lg:text-[8px] xl:text-[10px] font-urwgeometric
              leading-[100%]"
              >
                Price will vary depending on your
                <br />
                specific needs for each track.
              </p>
            </div>
          </div>
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
          onClick={() => router.push("/bookproject")}
        >
          Start a project
        </Button>
      </div>
    </div>
  )
}

export default BookProject
