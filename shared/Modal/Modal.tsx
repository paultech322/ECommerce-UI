import React, { ReactNode } from "react"
import Media from "../Media"
import { CloseBlurIcon, CloseIcon } from "../Icons"

interface IModal {
  onClose: () => any
  showCloseButton?: boolean
  children: ReactNode
  isVisible: Boolean
  containerClassName?: string
  closeButtonClassName?: string
  modalClassName?: string
}

function Modal({
  onClose,
  showCloseButton,
  children,
  isVisible,
  modalClassName,
  containerClassName,
  closeButtonClassName,
}: IModal) {
  return (
    <div
      className={`fixed w-screen h-screen
        z-[40] top-0 left-0
        ${modalClassName || ""}
        ${isVisible ? "block" : "hidden"}
      `}
      onClick={async (e) => (e.target === e.currentTarget && onClose ? await onClose() : () => {})}
    >
      {isVisible && (
        <div
          className={`relative 
        ${containerClassName || ""}`}
        >
          {showCloseButton && (
            <div
              className={`absolute 
              w-6 h-6 rounded-full cursor-pointer
              flex justify-center items-center z-[5] 
              ${closeButtonClassName || ""}`}
              onClick={onClose}
            >
              <Media
                type="image"
                link={CloseIcon}
                blurLink={CloseBlurIcon}
                containerClasses="w-[32px] aspect-[1/1]"
              />
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  )
}

export default Modal
