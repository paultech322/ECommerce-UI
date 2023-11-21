import { InputHTMLAttributes } from "react"

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  id: string
  label?: string
}

const Checkbox = ({ checked, onChange, id, className, label, ...rest }: ICheckbox) => {
  return (
    <>
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        hidden
        id={id}
        className="hidden"
        {...rest}
      />
      <label htmlFor={id} className="cursor-pointer">
        <div
          className={`bg-[#1A1A18]
          w-[24px] h-[24px]
          rounded-[4px] p-[5px]
          shadow-[0px_0px_4px_4px_#a1ea041a]`}
        >
          {checked && (
            <div
              className="w-full h-full
            bg-gradient-to-r from-[#A1EA04] to-[#DAEB02]
            rounded-[2px]"
            />
          )}
        </div>
      </label>
    </>
  )
}

export default Checkbox
