import FadeIn from "../../../FadeIn"
import SingleStudio from "../SingleStudio"
import data from "../data.json"

const StudioList = () => (
  <FadeIn className="w-full md:pt-[24px] lg:pt-[32px] xl:pt-[40px]">
    <div
      className="grid grid-cols-2 w-full
      md:gap-[24px] lg:gap-[32px] xl:gap-[40px]"
    >
      {data.map((studio) => (
        <SingleStudio key={studio.name} data={studio} hasEquipmentButton />
      ))}
    </div>
  </FadeIn>
)

export default StudioList
