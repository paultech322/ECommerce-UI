import { FC, ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDownIcon, ArrowUpIcon } from "../Icons"
import Media from "../Media"

interface IAccordion {
  className?: string
  tabClassName?: string
  contentClassname?: string
  title: ReactNode
  content: ReactNode
  tabNumber?: number
}

const Accordion: FC<IAccordion> = ({
  className,
  tabNumber,
  tabClassName,
  contentClassname,
  title,
  content,
}) => {
  const [isExpaned, setIsExpanded] = useState(false)
  return (
    <div
      className={`rounded-[24px]
      overflow-hidden
      bg-[#d2d2d20f] p-[20px]
      ${className || ""} 
      transition duration-[300ms]`}
    >
      <button
        className={`
          w-full 
          flex justify-between items-center 
          ${tabClassName}`}
        type="button"
        onClick={() => setIsExpanded(!isExpaned)}
      >
        <div className="flex gap-x-[5px]">
          {tabNumber && <p>{tabNumber}.</p>}
          <p>{title}</p>
        </div>
        <div>
          {isExpaned ? (
            <Media type="image" link={ArrowDownIcon} containerClasses="w-[24px] aspect-[1/1]" />
          ) : (
            <Media type="image" link={ArrowUpIcon} containerClasses="w-[24px] aspect-[1/1]" />
          )}
        </div>
      </button>
      <motion.div
        animate={{
          height: isExpaned ? "100%" : "0px",
        }}
      >
        <p className={`${contentClassname || ""}`}>{content}</p>
      </motion.div>
    </div>
  )
}

export default Accordion
