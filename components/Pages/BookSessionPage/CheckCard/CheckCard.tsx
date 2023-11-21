/* eslint-disable */
import Radiobox from "../../../../shared/Radiobox"

const CheckCard = ({ children, id, onClick = () => {}, checked }) => {
  return (
    <div
      className={`flex items-center gap-x-[15px]
      md:p-[12px] lg:p-[16px] xl:p-[20px]
      cursor-pointer
      md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
      shadow-[0px_1.5px_0px_2px_#d2d2d208]
      ${checked ? "border border-[#A1EA04]" : ""}`}
      onClick={onClick}
    >
      <Radiobox id={id} checked={checked} readOnly />
      {children}
    </div>
  )
}

export default CheckCard
