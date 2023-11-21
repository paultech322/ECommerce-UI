import { useBookProject } from "../../../../providers/BookProjectProvider"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import FadeIn from "../../../FadeIn"
import TrackCard from "../TrackCard"

const TrackList = () => {
  const { trackList, setTrackList, setCurStep, STEPS } = useBookProject()

  return (
    <FadeIn className="md:pt-[24px] lg:pt-[32px] xl:pt-[40px] w-full">
      <p className="text-[#d2d2d2] md:text-[19.2px] lg:text-[25.6px] xl:text-[32px] font-urwgeometric">
        Tracklist
      </p>
      <p className="md:text-[7.2px] lg:text-[9.6px] xl:text-[12px] text-[#8c8c8c] font-urwgeometric">
        List down all of the tracks of your project & choose the specific needs you have for each
        track.
      </p>
      <div
        className="grid grid-cols-2 md:pt-[24px] lg:pt-[32px] xl:pt-[40px]
            md:gap-x-[24px] lg:gap-x-[32px] xl:gap-x-[40px]
            md:gap-x-[36px] lg:gap-x-[48px] xl:gap-y-[60px]"
      >
        {trackList.map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TrackCard key={i} trackNumber={i + 1} hasRemoveButton={trackList?.length > 1} />
        ))}
        <div
          className="bg-[#d2d2d208] h-[118px] flex justify-center w-full items-center
                md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
        >
          <button
            className="border-r-[#d2d2d20f] border-r-[1px]
                    border-l-[#d2d2d20f] border-l-[1px] rounded-full flex items-center justify-center
                    border-b-[2px] border-b-[#d2d2d20f] aspect-[1/1]
                    bg-[#121211cc] md:w-[26.4px] lg:w-[35.2px] xl:w-[44px]
                    shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]"
            type="button"
            onClick={() => setTrackList([...trackList, {}])}
          >
            <Media
              type="image"
              link="/images/BookProject/plus.svg"
              blurLink="/images/BookProject/plus.png"
              containerClasses="md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]"
            />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          id="add-tracklist"
          type="button"
          className="md:w-[201px] lg:w-[268px] xl:w-[335px] md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
                    text-black font-urwgeometric_bold
                    border-r-[1px] border-r-[#A1EA04]
                    border-l-[1px] border-l-[#A1EA04]
                    border-b-[2px] border-b-[#A1EA04]
                    shadow-[0px_0px_40px_0px_#a1ea0466]
                    md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]
                    md:mt-[36px] lg:mt-[48px] xl:mt-[60px]"
          pulseColor="white"
          onClick={() => setCurStep(STEPS.PRICE_ESTIMATE)}
          disabled={trackList.filter((track) => !track.name).length}
        >
          Continue
        </Button>
      </div>
    </FadeIn>
  )
}

export default TrackList
