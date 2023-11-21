const ClipSpan = ({ className = "", children }) => (
  <span
    className={`bg-gradient-[270deg]
        bg-gradient-to-r from-[#A1EA04] to-[#DAEB02]
        from-[-0.02%] to-[100.01%]
        bg-clip-text text-[#00000000]
        ${className}`}
  >
    {children}
  </span>
)

export default ClipSpan
