import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"

const EstimateAmount = () => (
  <div
    className="bg-[#d2d2d208] w-full
        md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
        md:p-[12px] lg:p-[16px] xl:p-[20px]"
  >
    <p
      className="text-[#d2d2d2] font-urwgeometric_bold
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
    >
      Price Estimate
    </p>
    <p
      className="text-[#d2d2d2] font-urwgeometric md:text-[19.6px] lg:text-[25.6px] xl:text-[32px]
            md:py-[12px] lg:py-[16px] xl:py-[20px]"
    >
      $1,130.00
    </p>
    <Button
      id="estimate-btn"
      type="button"
      className="w-full md:h-[28.8px] lg:h-[38.4px] xl:h-[48px]
                            text-black font-urwgeometric_bold
                            border-r-[1px] border-r-[#A1EA04]
                            border-l-[1px] border-l-[#A1EA04]
                            border-b-[2px] border-b-[#A1EA04] leading-[100%]
                            shadow-[0px_0px_40px_0px_#a1ea0466]
                            md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
      pulseColor="white"
    >
      <div className="flex gap-x-[10px] items-center">
        <Media
          type="image"
          link="/images/Common/info.svg"
          blurLink="/images/Common/info.png"
          containerClasses="w-[12px] aspect-[1/1]"
        />
        <p className="text-left">
          The price provided is just an initial estimate. Once your
          <br />
          project is approved by the studio, you will receive more
          <br />
          detailed information regarding the final cost.
        </p>
      </div>
    </Button>
  </div>
)

export default EstimateAmount
