import { useBookProject } from "../../../../providers/BookProjectProvider"
import Button from "../../../../shared/Button"
import ClipSpan from "../../../ClipSpan"
import TrackCard from "../TrackCard"

const DeleteTrack = () => {
  const { selectedTrackNo, setIsOpenDelTrackModal, isOpenDelTrackModal, trackList, setTrackList } =
    useBookProject()

  const onDelTrack = () => {
    const temp = [
      ...trackList.slice(0, selectedTrackNo - 1),
      ...trackList.slice(selectedTrackNo, trackList.length),
    ]
    setTrackList(temp)
  }

  return (
    <div className="flex flex-col h-full">
      <p
        className="text-[#d2d2d2] md:text-[28.8px] lg:text-[38.4px] xl:text-[48px] font-urwgeometric
            md:pb-[24px] lg:pb-[32px] xl:pb-[40px]
            md:pt-[12px] lg:pt-[16px] xl:pt-[20px]"
      >
        Are you sure you want to delete <ClipSpan>Track {selectedTrackNo}</ClipSpan>?
      </p>

      <TrackCard trackNumber={selectedTrackNo} />

      <div
        className="flex-grow flex flex-col justify-end
            m:gap-y-[19.6px] md:gap-y-[25.6px] xl:gap-y-[32px]"
      >
        {isOpenDelTrackModal && (
          <>
            <Button
              id="cancel-btn"
              type="button"
              className="w-full md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
                            font-urwgeometric_bold
                            border-[1px] border-[#A1EA04] !text-[#A1EA04]
                            !bg-transparent bg-none !shadow-none
                            md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
              pulseColor="#A1EA04"
              onClick={() => setIsOpenDelTrackModal(!isOpenDelTrackModal)}
            >
              Cancel
            </Button>
            <Button
              id="delete-btn"
              type="button"
              className="w-full md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
                            text-black font-urwgeometric_bold
                            border-r-[1px] border-r-[#A1EA04]
                            border-l-[1px] border-l-[#A1EA04]
                            border-b-[2px] border-b-[#A1EA04]
                            shadow-[0px_0px_40px_0px_#a1ea0466]
                            md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
              pulseColor="white"
              onClick={() => {
                setIsOpenDelTrackModal(!isOpenDelTrackModal)
                onDelTrack()
              }}
            >
              Delete Track
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default DeleteTrack
