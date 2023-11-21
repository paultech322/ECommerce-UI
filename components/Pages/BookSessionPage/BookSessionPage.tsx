import Layout from "../../Layout"
import SessionTab from "./SessionTab"
import StepBar from "./StepBar"
import ProjectTab from "./ProjectTab"
import EquipmentModal from "./EquipmentModal"
import StudioList from "./StudioList"
import DateSelector from "./DateSelector"
import TimeSelector from "./TimeSelector"
import Container from "../../Container"
import AddDetails from "./AddDetails"
import BookedSession from "./BookedSession"
import { useBookSession } from "../../../providers/BookSessionProvider"
import FadeIn from "../../FadeIn"

const BookSessionPage = () => {
  const { curStep, STEPS } = useBookSession()

  return (
    <>
      <Layout type={curStep === STEPS.SUCCESS_BOOKED ? "full" : "base"}>
        {curStep !== STEPS.SUCCESS_BOOKED ? (
          <div className="w-full md:px-[33px] lg:px-[44px] xl:px-[55px]">
            <Container className="bg-[#121211ee]">
              <div
                className="absolute left-0 
              md:top-[-24px] lg:top-[-32px] xl:top-[-40px]
              w-full gap-x-[10px]
              flex justify-center items-center"
              >
                <SessionTab />
                {curStep !== STEPS.ADD_DETAILS && <ProjectTab />}
              </div>
              <StepBar />
              {curStep === STEPS.CHOOSE_ROOM && <StudioList />}
              {curStep === STEPS.CHOOSE_DATE && <DateSelector />}
              {curStep === STEPS.CHOOSE_TIME && <TimeSelector />}
              {curStep === STEPS.ADD_DETAILS && <AddDetails />}
            </Container>
          </div>
        ) : (
          <FadeIn
            className="pt-[40px] h-full
          flex flex-col"
          >
            <BookedSession />
          </FadeIn>
        )}
      </Layout>
      <EquipmentModal />
    </>
  )
}

export default BookSessionPage
