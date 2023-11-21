import Layout from "../../Layout"
import Container from "../../Container"
import SessionTab from "./SessionTab"
import ProjectTab from "./ProjectTab"
import StepBar from "./StepBar"
import AddDetail from "./AddDetail"
import { useBookProject } from "../../../providers/BookProjectProvider"
import TrackList from "./TrackList"
import AlertModal from "../../AlertModal"
import DeleteTrack from "./DeleteTrack"
import PriceEstimate from "./PriceEstimate"
import BookedProject from "./BookedProject"
import FadeIn from "../../FadeIn"

const BookProjectPage = () => {
  const { STEPS, curStep, isOpenDelTrackModal, setIsOpenDelTrackModal } = useBookProject()

  return (
    <>
      <Layout type={curStep === STEPS.SUCCESS ? "full" : "base"}>
        {curStep !== STEPS.SUCCESS ? (
          <div className="w-full md:px-[33px] lg:px-[44px] xl:px-[55px]">
            <Container className="!bg-[#12121166] !backdrop-blur-[20px]">
              <div
                className="absolute left-0 
              md:top-[-24px] lg:top-[-32px] xl:top-[-40px]
              w-full gap-x-[10px]
              flex justify-center items-center"
              >
                <ProjectTab />
                <SessionTab />
              </div>
              <StepBar />
              {curStep === STEPS.ADD_DETAIL && <AddDetail />}
              {curStep === STEPS.ADD_TRACKLIST && <TrackList />}
              {curStep === STEPS.PRICE_ESTIMATE && <PriceEstimate />}
            </Container>
          </div>
        ) : (
          <FadeIn
            className="pt-[40px] h-full
        flex flex-col"
          >
            <BookedProject />
          </FadeIn>
        )}
      </Layout>
      <AlertModal
        isOpenModal={isOpenDelTrackModal}
        toggleModal={() => setIsOpenDelTrackModal(!isOpenDelTrackModal)}
      >
        <DeleteTrack />
      </AlertModal>
    </>
  )
}

export default BookProjectPage
