import { FC, LegacyRef, ReactNode, useRef } from "react"
import usePulseEffect from "./usePulseEffect"

interface ButtonProps {
  id: string
  refP?: Element
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  pulseColor?: string
  onClick?: (e: any) => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  id,
  refP,
  children,
  pulseColor,
  className,
  onClick,
  disabled,
  ...rest
}) => {
  const elementRef = useRef()
  const ref = useRef()
  const pulseRef = useRef()

  usePulseEffect({
    ref,
    pulseRef,
    pulseColor,
  })

  return (
    <button
      ref={ref}
      id={id}
      type="button"
      className={`transition duration-[300ms] 
          rounded-[30px] text-[white]
          relative 
          overflow-hidden
          bg-gradient-[270deg] bg-gradient-to-r from-[#A1EA04] to-[#DAEB02] from-[-0.02%] to-[100.01%] shadow-[0px_0px_40px_0px_#a1ea0466]
          ${className || ""}
          ${disabled ? "cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <div
        className={`absolute
        z-[0] left-[-5px] top-[-5px]
        rounded-[50%]
        translate-x-[-50%]
        translate-y-[-50%]
        w-[0px] h-[0px]`}
        ref={pulseRef}
      />
      <div
        ref={(refP as unknown as LegacyRef<HTMLDivElement>) || elementRef}
        className="
        z-[6] w-full relative
        flex items-center justify-center
        gap-[10px]"
      >
        {children}
      </div>
    </button>
  )
}

export default Button
