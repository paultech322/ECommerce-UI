import { useBookSession } from "../../../../providers/BookSessionProvider"
import Modal from "../../../../shared/Modal"
import SingleStudio from "../SingleStudio"
import Container from "../../../Container"
import Media from "../../../../shared/Media"
import EquipmentDetail from "../EquipmentDetail"
import Button from "../../../../shared/Button"

const EquipmentModal = () => {
  const { isOpenEquipmentModal, setIsOpenEquipmentModal, studioOnModal } = useBookSession()

  return (
    <Modal
      isVisible={isOpenEquipmentModal}
      onClose={() => setIsOpenEquipmentModal(!isOpenEquipmentModal)}
      modalClassName="bg-[#121211cc] backdrop-blur-[20px]"
      containerClassName="h-full 
            flex justify-center
            overflow-hidden"
    >
      <div
        className="xl:w-[1280px] lg:w-[1024px] md:w-[768px]
            px-[30px] pt-[100px] pb-[50px]
            max-h-screen overflow-y-auto overflow-x-hidden"
      >
        <Container>
          <Button
            id="room-detail-close-btn"
            className="!absolute z-[10] bg-none
            md:top-[30px] lg:top-[40px] xl:top-[50px] 
            border-r-[#d2d2d20f] border-r-[1px]
            border-l-[#d2d2d20f] border-l-[1px]
            border-b-[2px] border-b-[#d2d2d20f]
            bg-[#121211cc] w-[44px] aspect-[1/1]
            backdrop-blur-[20px]
            md:right-[30px] lg:right-[40px] xl:right-[50px]"
            onClick={() => setIsOpenEquipmentModal(!isOpenEquipmentModal)}
          >
            <Media
              type="image"
              link="/images/BookSession/close.svg"
              blurLink="/images/BookSession/close.png"
              containerClasses="md:w-[19.2px] lg:w-[25.6px] xl:w-[32px] aspect-[1/1]"
            />
          </Button>
          <SingleStudio data={studioOnModal} />
          <EquipmentDetail
            className="md:mt-[14.4px] lg:mt-[19.2px] xl:mt-[24px]"
            data={studioOnModal}
          />
        </Container>
      </div>
    </Modal>
  )
}

export default EquipmentModal
