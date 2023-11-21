import Media from "../../shared/Media"

const AlertModal = ({ isOpenModal, toggleModal, children }) => (
  <div
    className={`!fixed top-0 left-0 w-screen h-screen z-40
            bg-[#121211cc] flex justify-end
            shadow-[0px_12px_24px_0px_#0000003d]
            ${isOpenModal ? "block" : "hidden"}`}
  >
    <div
      className="w-[640px] h-full bg-[#1A1A18]
            flex flex-col py-[5vh] md:px-[36px] lg:px-[48px] xl:px-[60px]"
    >
      <button
        type="button"
        className="border-r-[#d2d2d20f] border-r-[1px]
                        border-l-[#d2d2d20f] border-l-[1px] self-end
                        border-b-[2px] border-b-[#d2d2d20f] bg-[#d2d2d20f]
                        w-[44px] aspect-[1/1] flex justify-center items-center
                        shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
                        rounded-full"
        onClick={toggleModal}
      >
        <Media
          type="image"
          link="/images/Common/close.svg"
          blurLink="/images/Common/close.png"
          containerClasses="md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]
                            sefl-end"
        />
      </button>
      {children}
    </div>
  </div>
)

export default AlertModal
