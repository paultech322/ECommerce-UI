import Header from "../Header"

const MobileHeader = () => (
  <div
    className="fixed top-0 left-0
        z-[100] w-screen pt-[32px] px-[10px]
        flex justify-between"
  >
    <Header />
  </div>
)

export default MobileHeader
