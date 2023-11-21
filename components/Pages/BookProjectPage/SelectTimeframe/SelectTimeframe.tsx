import { useBookProject } from "../../../../providers/BookProjectProvider"
import SelectBox from "../../../SelectBox"

const SelectTimeframe = () => {
  const { timeframe, setTimeframe, timeframeOptions } = useBookProject()

  return (
    <div
      className="md:p-[12px] lg:p-[16px] xl:p-[20px] bg-[#d2d2d208]
        md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
    >
      <p
        className="md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
            text-[#d2d2d2] font-urwgeometric_bold"
      >
        Choose Timeframe
      </p>
      <p
        className="md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]
            font-urwgeometric text-[#8c8c8c]"
      >
        Select the ideal timeframe that you would want to have the project
        <br />
        finished by. The studio will try its best to offer you enough sessions to finish
        <br />
        your project.
      </p>
      <div className="md:pt-[12px] lg:pt-[16px] xl:pt-[20px]">
        <SelectBox
          id="timeframe"
          name="timeframe"
          value={timeframe?.value}
          onChange={setTimeframe}
          placeholder="Choose the Timeframe..."
          options={timeframeOptions}
        />
      </div>
    </div>
  )
}

export default SelectTimeframe
