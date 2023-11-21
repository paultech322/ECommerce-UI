import { useMemo } from "react"
import { useBookProject } from "../../../../providers/BookProjectProvider"
import Media from "../../../../shared/Media"
import TrackItem from "../TrackItem"

const TrackCard = ({ trackNumber, hasRemoveButton = false }) => {
  const { setTrackList, trackList, openDelTrackModal } = useBookProject()

  const trackData = useMemo(() => trackList[trackNumber - 1] || {}, [trackList, trackNumber])

  const onChange = (name) => {
    const temp = [...trackList]
    temp[trackNumber - 1].name = name
    setTrackList(temp)
  }

  const toggleTrack = (trackKey) => {
    const temp = [...trackList]
    temp[trackNumber - 1][trackKey] = !temp[trackNumber - 1][trackKey]
    setTrackList(temp)
  }

  return (
    <div
      className="bg-[#d2d2d208] h-[118px] relative
        md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
    >
      <div
        className="border-r-[#d2d2d20f] border-r-[1px]
            border-l-[#d2d2d20f] border-l-[1px]
            border-b-[2px] border-b-[#d2d2d20f]
            md:px-[24px] lg:px-[32px] xl:px-[40px]
            h-[48px]
            md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
      >
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-x-[10px] flex-grow">
            <p className="md:text-[10.8px] lg:text-[14.4px] xl:text-[18px] font-urwgeometric_bold text-[#a1ea04]">
              {trackNumber}
            </p>
            <input
              value={trackData?.name || ""}
              placeholder="Enter Track Name..."
              className="bg-transparent
                        flex-grow
                            !outline-none !border-none font-urwgeometric
                            focus:!ring-0 text-[#d2d2d2]"
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          {hasRemoveButton && (
            <button
              type="button"
              className="flex items-center justify-center bg-[#d2d2d20f]
                    md:w-[14.4px] lg:w-[19.6px] xl:w-[24px] aspect-[1/1]
                    rounded-full overflow-hidden
                    shadow-[2px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]"
              onClick={() => openDelTrackModal(trackNumber)}
            >
              <Media
                type="image"
                link="/images/BookProject/remove.svg"
                blurLink="/images/BookProject/remove.png"
                containerClasses="md:w-[8.4px] lg:w-[11.2px] xl:w-[14px] aspect-[1/1]"
              />
            </button>
          )}
        </div>
      </div>
      <div
        className="absolute w-full md:bottom-[-12px] lg:bottom-[-16px] xl:bottom-[-20px]
            flex justify-center md:gap-x-[19.2px] lg:gap-x-[25.6px] xl:gap-x-[32px]"
      >
        <TrackItem
          label="Writing"
          selected={trackData?.writing}
          toggleItem={() => toggleTrack("writing")}
        />
        <TrackItem
          label="Recording"
          selected={trackData?.recording}
          toggleItem={() => toggleTrack("recording")}
        />
        <TrackItem
          label="Production"
          selected={trackData?.production}
          toggleItem={() => toggleTrack("production")}
        />
        <TrackItem
          label="Mixing"
          selected={trackData?.mixing}
          toggleItem={() => toggleTrack("mixing")}
        />
        <TrackItem
          label="Mastering"
          selected={trackData?.mastering}
          toggleItem={() => toggleTrack("mastering")}
        />
      </div>
    </div>
  )
}

export default TrackCard
