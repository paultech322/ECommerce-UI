const USDAmount = ({ amount, label }) => (
  <p
    className="text-[#d2d2d2] 
  md:text-[19.2px] md:text-[25.6px] xl:text-[32px] font-urwgeometric"
  >
    ${amount}
    <span
      className="text-[#8C8C8C] 
    md:text-[12px] lg:text-[16px] xl:text-[20px]"
    >
      /{label}
    </span>{" "}
  </p>
)

export default USDAmount
