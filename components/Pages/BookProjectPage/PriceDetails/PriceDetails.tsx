const PriceDetails = () => (
  <div
    className="bg-[#12121166] md:mt-[12px] lg:mt-[16px] xl:mt-[20px]
          md:p-[19.2px] lg:p-[25.6px] xl:p-[32px]
          md:rounded-[14.4px] lg:rounded-[16px] xl:rounded-[24px]"
  >
    <p
      className="font-urwgeometric_bold
              text-[#d2d2d2] 
              md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
    >
      Price Details
    </p>
    <div
      className="w-full grid grid-cols-2
              text-[#d2d2d2] font-urwgeometric
              gap-y-[6px]
              md:pt-[9.6px] lg:pt-[12.8px] xl:pt-[16px]
              md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]"
    >
      <p>
        3 Tracks{" "}
        <span className="md:text-[6px] lg:text-[8px] xl:text-[10px] text-[#8c8c8c]">
          (approx. 6 Full-Day Sessions)
        </span>
      </p>
      <p className="text-right">$300</p>
      <p>Service Fee</p>
      <p className="text-right">$80.00</p>
      <p>Session Fee</p>
      <p className="text-right">$50.00</p>
    </div>
    <div
      className="w-full h-[2px] bg-[#d2d2d20f]
              my-[6px]"
    />
    <div
      className="flex justify-between
               text-[#d2d2d2] font-urwgeometric_bold
               md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]"
    >
      <p>Total Price Estimate (USD)</p>
      <p>$1,130.00</p>
    </div>
  </div>
)

export default PriceDetails
