import Header from "../Header"

const BaseHeader = () => (
  <div
    className="fixed w-screen
        flex justify-center"
  >
    <div
      className="xl:w-[1280px] lg:w-[1024px] md:w-[768px]
    md:pt-[24px] lg:pt-[32px] xl:pt-[40px]
    flex justify-between items-center"
    >
      <Header />
    </div>
  </div>
)

export default BaseHeader
