import Media from "../../../../shared/Media"

const RulesSafety = () => (
  <div
    className="md:py-[19.2px] lg:py-[25.6px] xl:py-[32px]
      md:mt-[24px] lg:mt-[32px] xl:mt-[40px]
      border-b-[2px] border-b-[#d2d2d20f]"
  >
    <div className="flex items-center justify-between">
      <p
        className="font-urwgeometric_bold
                text-[#d2d2d2] 
                md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
      >
        Rules & Safety
      </p>
      <Media
        type="image"
        link="/images/BookProject/arrow-right.svg"
        blurLink="/images/BookProject/arrow-right.png"
        containerClasses="md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]"
      />
    </div>
    <p
      className="md:text-[8.4px] lg:text-[11.2px] xl:text-[14px] text-[#d2d2d2] font-urwgeometric
      md:pt-[7.2px] lg:pt-[9.6px] xl:pt-[12px]"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      <br />
      eirmod tempor invidunt ut.
    </p>
  </div>
)

export default RulesSafety
