const Container = ({ containerClassName = "", children, className = "" }) => (
  <div
    className={`relative w-full
    border-r-[#d2d2d20f] border-r-[1px]
    border-l-[#d2d2d20f] border-l-[1px]
    border-b-[2px] border-b-[#d2d2d20f]
    md:rounded-[28.8px] lg:rounded-[38.4] xl:rounded-[48px]
    ${containerClassName}`}
  >
    <div
      className={`shadow-[0px_12px_24px_0px_#0000003d]
    bg-[#1A1A18] bg-gradient-to-b bg-gradient-[180deg]
    from-[#a1ea0400] via-[#a1ea0405] to-[#a1ea041a]
    from-[0%] via-[75%] to-[100%]
    backdrop-blur-[20px]
    md:rounded-[28.8px] lg:rounded-[38.4] xl:rounded-[48px]
    absolute left-0 top-0 w-full h-full z-[1]
    ${className}`}
    />
    <div className="relative z-[2] w-full h-full flex flex-col items-center md:p-[21px] lg:p-[28px] xl:p-[35px]">
      {children}
    </div>
  </div>
)

export default Container
