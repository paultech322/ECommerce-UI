import { FC, useEffect, useState, ReactNode, useMemo } from "react"
import { useFormContext, useFormState } from "react-hook-form"
import Media from "../../shared/Media"
import {
  ArrowDownIcon,
  ErrorBlurIcon,
  ErrorIcon,
  InvalidBlurIcon,
  InvalidIcon,
  ValidBlurIcon,
  ValidIcon,
} from "../Icons"
import DropDown from "../DropDown"

export interface ISelectOptions {
  value: string
  label: string | ReactNode
}

interface ISelect {
  id?: string
  name?: string
  value?: any
  className?: string
  containerClassName?: string
  classNameError?: string
  onChange?: () => any
  placeholder?: string
  hookToForm: boolean
  options: ISelectOptions[]
}

const Select: FC<ISelect> = ({
  id,
  className = "",
  containerClassName = "",
  classNameError = "",
  name,
  value,
  onChange,
  placeholder,
  hookToForm,
  options,
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)
  const formContext = useFormContext()
  const formState = useFormState()
  const isFullyHooked = name && hookToForm && formContext
  const fieldError = isFullyHooked && formState?.errors?.[name]
  const [canTrigger, setCanTrigger] = useState(false)

  const isInvalid = fieldError && fieldError?.message && formState?.isSubmitted
  const isValid = isFullyHooked && !fieldError?.message && canTrigger

  const label = useMemo(() => {
    return options.filter((option) => option.value === value)?.[0]?.label
  }, [options, value])

  useEffect(() => {
    if (name && hookToForm && value) {
      formContext.setValue(name, value || "")
      formContext.trigger(name)
      setCanTrigger(true)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`w-full relative rounded-full overflow-hidden
           ${containerClassName}`}
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
      >
        <p className={`${className}`}>{label || placeholder}</p>
        <input
          id={id}
          hidden
          name={name}
          value={value || ""}
          readOnly
          {...(isFullyHooked
            ? formContext.register(name, {
                value: value,
              })
            : {})}
        />
        <div className="flex-grow flex justify-end items-center gap-x-[5px]">
          {isInvalid && (
            <Media
              type="image"
              link={InvalidIcon}
              blurLink={InvalidBlurIcon}
              containerClasses="w-[24px] h-[24px]"
            />
          )}
          {isValid && (
            <Media
              type="image"
              link={ValidIcon}
              blurLink={ValidBlurIcon}
              containerClasses="w-[24px] h-[24px]"
            />
          )}
          <button
            className="bg-[#d2d2d20f] flex justify-center items-center
              w-[24px] aspect-[1/1] rounded-full overflow-hidden"
            type="button"
            onClick={() => setIsOpenDropDown(!isOpenDropDown)}
          >
            <Media
              type="image"
              link={ArrowDownIcon}
              blurLink={ArrowDownIcon}
              containerClasses="w-[16px] aspect-[1/1]"
            />
          </button>
        </div>
      </div>
      {isInvalid && (
        <div
          className={`flex gap-x-[5px]
        pl-[20px] pt-[10px] ${classNameError}`}
        >
          <Media
            type="image"
            link={ErrorIcon}
            blurLink={ErrorBlurIcon}
            containerClasses="w-[12px] h-[12px]"
          />
          <pre className="leading-[100%] font-urwgeometric pt-[3px]">
            {fieldError?.message as string}
          </pre>
        </div>
      )}
      <DropDown
        title={`Choose ${label || name}`}
        value={value}
        onChange={onChange}
        isVisibleDropDown={isOpenDropDown}
        toggleDropDown={() => setIsOpenDropDown(!isOpenDropDown)}
        options={options}
      />
    </>
  )
}

export default Select
