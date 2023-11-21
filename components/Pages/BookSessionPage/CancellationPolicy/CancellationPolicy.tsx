const CancellationPolicy = () => (
  <div
    className="bg-[#12121166]
        md:mt-[12px] lg:mt-[16px] xl:mt-[20px]
        md:p-[19.2px] lg:p-[25.6px] xl:p-[32px]
        md:rounded-[14.4px] lg:rounded-[16px] xl:rounded-[24px]"
  >
    <p
      className="font-urwgeometric_bold
            text-[#d2d2d2] 
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
    >
      Cancellation Policy
    </p>
    <div
      className="w-full grid grid-cols-2
            text-[#d2d2d2] font-urwgeometric
            gap-y-[6px]
            md:pt-[9.6px] lg:pt-[12.8px] xl:pt-[16px]
            md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]"
    >
      <p>48 hours before your session</p>
      <p className="text-right">100% Refund</p>
      <p>24 hours before your session</p>
      <p className="text-right">50% Refund</p>
    </div>
  </div>
)

export default CancellationPolicy
