import Media from "../../../../shared/Media"

const ProjectTab = () => (
  <div
    className="md:w-[201px] lg:w-[268px] xl:w-[335px]
    aspect-[335/56]
    pt-[1px] px-[1px] pb-[2px]
    rounded-full relative overflow-hidden
    cursor-pointer"
  >
    <div
      className="bg-gradient-to-r
            from-[#ff6a2b3d] via-[#FF6A2B] to-[#ff6a2b3d]
            w-[100%] h-[250%] translate-y-[-40px]
            rotate-[3deg]
            opacity-[0.6]
            from-[10%] via-[30%] to-[100%]
            z-[1]
            absolute left-0 top-0"
    />
    <div
      className="bg-gradient-to-r
            from-[#121211] to-transparent to-[#121211]
            w-[100%] h-[250%] translate-y-[-40px]
            rotate-[3deg]
            from-[30%] via-[40%] to-[100%]
            opacity-[0.5]
            z-[3]
            absolute left-0 top-0"
    />
    <div
      className="w-full h-full relative
            from-[#2525278c] via-[#2525278c] to-[#2525278c]
            bg-gradient-to-r
            flex items-center justify-center
            backdrop-blur-[6px]
            z-[4] rounded-full"
    >
      <Media
        type="image"
        link="/images/BookSession/star.svg"
        blurLink="/images/BookSession/star.png"
        containerClasses="md:w-[26.4px] lg:w-[35.2px] xl:w-[44px]
        aspect-[1/1]"
      />
      <p
        className="font-urwgeometric_bold text-[#d2d2d2] 
        md:text-[14.4px] lg:text-[19.2px] xl:text-[24px] leading-[100%]"
      >
        Project
      </p>
    </div>
  </div>
)

export default ProjectTab
