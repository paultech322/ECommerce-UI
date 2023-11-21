const ProgressBar = ({ value }) => {
  return (
    <div
      className="w-full rounded-full
              h-[4px] bg-[#d2d2d21f]"
    >
      <div
        style={{
          width: `${value}%`,
        }}
        className="h-full
                  bg-gradient-to-r from-[#A1EA04] to-[#DAEB02]
                  rounded-full
                  shadow-[0px_0px_24px_0px_#a1ea0499]"
      />
    </div>
  )
}

export default ProgressBar
