import { createContext, useContext, useState, useMemo } from "react"
import { STEPS, availableTimes, PAYMENTS } from "../lib/bookSession"

const BookSessionContext = createContext(null)

const BookSessionProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.CHOOSE_ROOM)
  const totalStep = 3
  const [studioOnModal, setStudioOnModal] = useState(null)
  const [isOpenEquipmentModal, setIsOpenEquipmentModal] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedStudio, setSelectedStudio] = useState(null)
  const [selectedStartTime, setSelectedStartTime] = useState(0)
  const [selectedEndTime, setSelectedEndTime] = useState(0)
  const [sessionDetail, setSessionDetail] = useState("")
  const [comingPeople, setComingPeople] = useState(1)
  const [selectedPayment, setSelectedPayment] = useState(PAYMENTS.STRIPE)
  const [isEngineerNeeded, setIsEngineerNeeded] = useState(true)

  const openEquipmentModal = (data) => {
    setStudioOnModal(data)
    setIsOpenEquipmentModal(true)
  }

  const value = useMemo(
    () => ({
      curStep,
      setCurStep,
      STEPS,
      PAYMENTS,
      availableTimes,
      totalStep,
      setStudioOnModal,
      studioOnModal,
      isOpenEquipmentModal,
      setIsOpenEquipmentModal,
      openEquipmentModal,
      selectedDay,
      setSelectedDay,
      selectedStudio,
      setSelectedStudio,
      selectedStartTime,
      setSelectedStartTime,
      setSelectedEndTime,
      selectedEndTime,
      sessionDetail,
      setSessionDetail,
      setSelectedPayment,
      selectedPayment,
      isEngineerNeeded,
      setIsEngineerNeeded,
      comingPeople,
      setComingPeople
    }),
    [
      curStep,
      setCurStep,
      STEPS,
      PAYMENTS,
      availableTimes,
      totalStep,
      setStudioOnModal,
      studioOnModal,
      isOpenEquipmentModal,
      setIsOpenEquipmentModal,
      openEquipmentModal,
      selectedDay,
      setSelectedDay,
      selectedStudio,
      setSelectedStudio,
      selectedStartTime,
      setSelectedStartTime,
      setSelectedEndTime,
      selectedEndTime,
      sessionDetail,
      setSessionDetail,
      selectedPayment,
      setSelectedPayment,
      isEngineerNeeded,
      setIsEngineerNeeded,
      comingPeople,
      setComingPeople
    ],
  )

  return <BookSessionContext.Provider value={value}>{children}</BookSessionContext.Provider>
}

export const useBookSession = () => {
  const context = useContext(BookSessionContext)
  if (!context) {
    throw new Error("useBookSession must be used within a BookSessionProvider")
  }
  return context
}

export default BookSessionProvider
