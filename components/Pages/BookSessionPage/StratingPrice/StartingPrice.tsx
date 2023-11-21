import Button from "../../../../shared/Button"

const StartingPrice = ({ value }) => (
  <Button
    id="starting-from"
    type="button"
    className="md:w-[48px] lg:w-[64px] xl:w-[80px] aspect-[80/28]
        text-black font-urwgeometric
        border-r-[1px] border-r-[#A1EA04]
        border-l-[1px] border-l-[#A1EA04]
        border-b-[2px] border-b-[#A1EA04]
        shadow-[0px_0px_40px_0px_#a1ea0466]"
    pulseColor="white"
  >
    <p
      className="text-[#1A1A18] font-urwgeometric leading-[100%]
              pt-[4px]
              md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
    >
      ${value}
      <span className="md:text-[6px] lg:text-[8px] xl:text-[10px]">/hr</span>
    </p>
  </Button>
)

export default StartingPrice
