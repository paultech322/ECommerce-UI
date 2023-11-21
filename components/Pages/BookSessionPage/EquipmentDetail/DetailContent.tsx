const DetailContent = ({ content }) => (
  <div
    className="grid grid-cols-2
        md:gap-x-[24px] lg:gap-x-[32px] xl:gap-x-[40px] 
        md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]"
  >
    {content?.map((data, i) => (
      <div
        className="flex items-center 
                gap-x-[5px] font-urwgeometric
                text-[#8c8c8c]"
        // eslint-disable-next-line react/no-array-index-key
        key={i}
      >
        <div
          className="w-[6px] aspect-[1/1] 
                    rounded-full
                    bg-[#8C8C8C]"
        />
        <p className="pt-[4px]">{data}</p>
      </div>
    ))}
  </div>
)

export default DetailContent
