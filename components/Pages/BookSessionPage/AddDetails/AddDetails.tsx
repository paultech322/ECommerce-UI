import { useBookSession } from "../../../../providers/BookSessionProvider"
import BookSessionButton from "../BookSessionButton"
import BookedStudio from "../BookedStudio"
import CancellationPolicy from "../CancellationPolicy"
import ComingPeople from "../ComingPeople"
import EquipmentDetail from "../EquipmentDetail"
import InputDetail from "../InputDetail"
import ReservingSpot from "../ReservingSpot"
import EngineerNeedQuestion from "../EngineerNeedQuestion"
import StudioLocation from "../StudioLocation"
import Form from "../../../../shared/Form"
import FadeIn from "../../../FadeIn"
import BackwardButton from "../../../BackwardButton"

const AddDetails = () => {
  const { selectedStudio, STEPS, setCurStep } = useBookSession()

  return (
    <FadeIn className="w-full">
      <Form
        onSubmit={async () => {
          setCurStep(STEPS.ADD_DETAILS)
        }}
        validationSchema={null}
        className="w-full grid grid-cols-2
                md:gap-x-[24px] lg:gap-x-[32px] xl:gap-x-[40px]
                md:pt-[24px] lg:pt-[32px] xl:pt-[40px]"
      >
        <div className="col-span-2 pb-[20px]">
          <BackwardButton onClick={() => setCurStep(STEPS.CHOOSE_TIME)} />
        </div>
        <div className="flex flex-col">
          <ReservingSpot />
          <BookedStudio />
          <InputDetail />
          <BookSessionButton />
        </div>
        <div>
          <EngineerNeedQuestion />
          <ComingPeople />
          <CancellationPolicy />
        </div>
        <div
          className="col-span-2 flex flex-col
          md:gap-y-[24px] lg:gap-y-[32px] xl:gap-y-[40px]"
        >
          <StudioLocation />
          <EquipmentDetail data={selectedStudio} />
        </div>
      </Form>
    </FadeIn>
  )
}

export default AddDetails
