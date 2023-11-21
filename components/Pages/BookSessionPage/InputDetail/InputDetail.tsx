import { useBookSession } from "../../../../providers/BookSessionProvider"
import Media from "../../../../shared/Media"
import TextArea from "../../../../shared/TextArea/TextArea"

const InputDetail = () => {
  const { sessionDetail, setSessionDetail } = useBookSession()

  return (
    <div
      className="w-full
    bg-[#d2d2d208] md:p-[12px] lg:p-[16px] xl:p-[20px]
    md:rounded-[14.4px] lg:rounded-[16px] xl:rounded-[24px]"
    >
      <div
        className="flex items-center 
            md:pb-[12px] lg:pb-[16px] xl:pb-[20px]"
      >
        <Media
          type="image"
          link="/images/BookSession/detail-logo.svg"
          blurLink="/images/BookSession/detail-logo.png"
          containerClasses="md:w-[23.4px] lg:w-[31.2px] xl:w-[39px]
                    aspect-[39/53]"
        />
        <p
          className="font-urwgeometric_bold 
                md:pt-[6px] lg:pt-[8px] xl:pt-[10px]
                md:text-[19.2px] lg:text-[25.6px] xl:text-[32px] 
                text-[#d2d2d2]"
        >
          Session Details
        </p>
      </div>
      <TextArea
        id="sessin-detail"
        value={sessionDetail}
        onChange={(e) => setSessionDetail(e.target.value)}
        rows={5}
        containerClassName="border-l-[1px] border-l-[#d2d2d20f]
        border-r-[1px] border-r-[#d2d2d20f]
        border-b-[2px] border-b-[#d2d2d20f]
        !bg-[#d2d2d20f]"
        placeholder="Describe your project. What are you planning on using the studio for? Do you need any specific equipment? Let us know..."
      />
    </div>
  )
}

export default InputDetail
