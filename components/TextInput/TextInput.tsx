import { FC } from "react"
import Input from "../../shared/Input"
import TextArea from "../../shared/TextArea/TextArea"

interface TextInputProps {
  label: string
  id: string
  value: any
  onChange: any
  name: string
  placeholder: string
  type: "text" | "password" | "url" | "number"
  classNameError?: string
  variant?: "single" | "multiple"
  infoText?: string
}
const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  id,
  name,
  placeholder,
  type = "text",
  classNameError = "",
  variant = "single",
  infoText = "",
}) => (
  <div className="w-full">
    <p
      className="text-[#d2d2d2]
            pl-[20px] pb-[8px]
            font-urwgeometric"
    >
      {label}
    </p>
    {variant === "single" ? (
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
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
                focus:border-none 
                focus:ring-0
                placeholder:text-[14px]
                placeholder:text-[#8c8c8c]
                px-[30px]"
        placeholder={placeholder}
        classNameError={`text-[#F3436D] font-urwgeometric_medium
      text-[10px] ${classNameError}`}
        infoText={infoText}
        hookToForm
      />
    ) : (
      <TextArea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        containerClassName="border-l-[1px] border-l-[#d2d2d20f]
        border-r-[1px] border-r-[#d2d2d20f]
        border-b-[2px] border-b-[#d2d2d20f]
        !bg-[#d2d2d20f]"
        placeholder="Describe your project. What are you planning on using the studio for? Do you need any specific equipment? Let us know..."
        classNameError={`text-[#F3436D] font-urwgeometric_medium
        text-[10px] ${classNameError}`}
        hookToForm
      />
    )}
  </div>
)

export default TextInput
