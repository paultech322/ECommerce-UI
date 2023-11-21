import { useBookProject } from "../../../../providers/BookProjectProvider"
import Input from "../../../../shared/Input"
import Media from "../../../../shared/Media"
import EndIcon from "../EndIcon"
import StartIcon from "../StartIcon"

const AddLinks = () => {
  const { links, setLinks } = useBookProject()

  const onChange = (val, i) => {
    const temp = [...links]

    temp[i] = val

    setLinks(temp)
  }

  return (
    <div
      className="md:mt-[24px] lg:mt-[32px] xl:mt-[40px]
        md:p-[12px] lg:p-[16px] xl:p-[20px] bg-[#d2d2d208]
        md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
    >
      <p
        className="md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
            text-[#d2d2d2] font-urwgeometric_bold"
      >
        Add Links
      </p>
      <p
        className="md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]
            font-urwgeometric text-[#8c8c8c]"
      >
        Add any relevant links here (eg. Spotify Page, Instagram,
        <br />
        Soundcloud, Website etc) this helps the studio get to know
        <br />
        who you are. This will improve your chances.
      </p>
      <div
        className="md:py-[12px] lg:py-[16px] xl:py-[20px]
            flex flex-col md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]"
      >
        {links.map((link, i) => (
          <Input
            // eslint-disable-next-line react/no-array-index-key
            key={`link_${i}`}
            id={`link_${i}`}
            name={`link_${i}`}
            value={link}
            type="text"
            onChange={(e) => onChange(e.target.value, i)}
            containerClassName="w-full h-[48px]
                                border-l-[1px] border-l-[#d2d2d20f]
                                border-r-[1px] border-r-[#d2d2d20f]
                                border-b-[2px] border-b-[#d2d2d20f]
                                shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
                                backdrop-blur-[12px]
                                bg-[#d2d2d20f]"
            className="outline-none
                                text-[#8c8c8c]
                                font-urwgeometric
                                focus:!border-[1px] 
                                focus:ring focus:ring-[#a1ea04]
                                placeholder:text-[14px]
                                placeholder:text-[#8c8c8c]
                                px-[40px]"
            placeholder="e.g.: spotify.com/user/yourname"
            classNameError={`text-[#F3436D] font-urwgeometric_medium
                        text-[10px]`}
            startIcon={<StartIcon label={i + 1} />}
            endIcon={<EndIcon num={i} />}
            hookToForm
          />
        ))}
        <button
          onClick={() => {
            setLinks([...links, ""])
          }}
          type="button"
          className="border-[#d2d2d20f] border-x-[1px] border-b-[2px]
        w-[44px] aspect-[1/1] rounded-full self-center
        flex items-center justify-center
        bg-[#121211cc] shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]"
        >
          <Media
            type="image"
            link="/images/BookProject/plus.svg"
            blurLink="/images/BookProject/plus.png"
            containerClasses="w-[24px] aspect-[1/1]"
          />
        </button>
      </div>
    </div>
  )
}

export default AddLinks
