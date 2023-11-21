import ClipSpan from "../../../ClipSpan"

const SingleStudio = () => (
  <div
    className="w-full h-[140px] overflow-hidden
        flex  md:rounded-[19.2px] lg:rounded-[25.6px] xl:rounded-[34px]"
  >
    <div
      className="h-full w-[160px]
                bg-[url('/images/BookProject/lady-studio.png')]
                bg-cover bg-center"
    />
    <div
      className="h-full flex-grow
            flex flex-col justify-center backdrop-blur-[20px]
            bg-[url('/images/BookProject/lady-studio-opacity.png')]
            bg-cover bg-center
            md:p-[12px] lg:p-[16px] xl:p-[20px]"
    >
      <div
        className="absolute left-0 top-0 h-full w-full
                bg-gradient-to-b from-[#d9d9d90f] to-[#d9d9d900]
                flex-grow from-[12.5%] to-[74.02%]"
      />
      <p
        className="drop-shadow-[0px_0px_24px_#a1ea0499] font-urwgeometric_bold leading-[100%]
                md:text-[12px] lg:text-[16px] xl:text-[20px]"
      >
        <ClipSpan>Electric Lady Studios</ClipSpan>
      </p>
      <p
        className="text-[#d2d2d2] md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]
                font-urwgeometric_bold"
      >
        4 Rooms
      </p>
    </div>
  </div>
)

export default SingleStudio
