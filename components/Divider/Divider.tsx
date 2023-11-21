import ClipSpan from "../ClipSpan"

const Divider = ({ className = "" }) => (
  <div
    className={`w-full flex items-center justify-between 
        ${className}`}
  >
    <div
      className="w-full h-[2px]
      bg-gradient-[270deg]
      bg-gradient-to-r from-[#a1ea04] to-[#daeb02]
      from-[-0.02%] to-[100.01%]"
    />
    <ClipSpan className="px-[20px] text-[#a1ea04] font-urwgeometric_bold">OR</ClipSpan>
    <div
      className="w-full h-[2px]
      bg-gradient-[270deg]
        bg-gradient-to-r from-[#a1ea04] to-[#daeb02]
      from-[-0.02%] to-[100.01%]"
    />
  </div>
)

export default Divider
