import { FC } from "react"
import Select from "../../shared/Select"
import { ISelectOptions } from "../../shared/Select/Select"

interface SelectBoxProps {
  label?: string
  id?: string
  name?: string
  value?: any
  onChange?: () => any
  placeholder?: string
  options: ISelectOptions[]
}

const SelectBox: FC<SelectBoxProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
}) => (
  <div className="w-full relative">
    <p
      className="text-[#d2d2d2]
                pl-[20px] pb-[8px]
                font-urwgeometric"
    >
      {label || ""}
    </p>
    <Select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="text-urwgeometric text-[#d2d2d2]
          md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]"
      containerClassName="h-[48px] flex items-center justify-between
          border-l-[1px] border-l-[#d2d2d20f]
          border-r-[1px] border-r-[#d2d2d20f]
          border-b-[2px] border-b-[#d2d2d20f]
          shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
          backdrop-blur-[12px] 
          bg-[#d2d2d20f] px-[30px]"
      classNameError="text-[#F3436D] font-urwgeometric_medium
          text-[10px]"
      options={options}
      placeholder={placeholder}
      hookToForm
    />
  </div>
)

export default SelectBox
