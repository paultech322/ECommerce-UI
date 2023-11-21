import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { STEPS, validation, genreOptions, timeframeOptions } from "../lib/bookProject"
import JoiBase from 'joi'

const BookProjectContext = createContext(null)

const BookProjectProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.ADD_DETAIL)
  const totalStep = 3

  const [bandName, setBandName] = useState('')
  const [links, setLinks] = useState([""])
  const [validationSchema, setValidationSchema] = useState<any>(null)
  const [projectName, setProjectName] = useState("")
  const [genre, setGenre] = useState({})
  const [projectDesc, setProjectDesc] = useState("")
  const [timeframe, setTimeframe] = useState({})
  const [trackList, setTrackList] = useState([{}])
  const [isOpenDelTrackModal, setIsOpenDelTrackModal] = useState(false)
  const [selectedTrackNo, setSelectedTrackNo] = useState(-1)

  const openDelTrackModal = (trackNumber) => {
    setSelectedTrackNo(trackNumber)
    setIsOpenDelTrackModal(true)
  }

  useEffect(() => {
    const linkSchema = {}
    for(let i = 0 ; i < links.length ; i++) {
      linkSchema[`link_${i}`] = JoiBase.string()
      .uri()
      .messages({
        "string.empty": `This does not look like a correct link. Please enter a valid link`,
        "string.uri": 'This does not look like a correct link. Please enter a valid link'
      })
    }
    setValidationSchema(JoiBase.object({...validation, ...linkSchema}))
  }, [links])

  const value = useMemo(
    () => ({
      curStep,
      setCurStep,
      STEPS,
      totalStep,
      bandName,
      setBandName,
      links,
      setLinks,
      validationSchema,
      projectName,
      setProjectName,
      genre,
      setGenre,
      genreOptions,
      projectDesc,
      setProjectDesc,
      timeframeOptions,
      timeframe,
      setTimeframe,
      trackList,
      setTrackList,
      isOpenDelTrackModal,
      setIsOpenDelTrackModal,
      openDelTrackModal,
      selectedTrackNo
    }),
    [
      curStep,
      setCurStep,
      STEPS,
      totalStep,
      bandName,
      setBandName,
      links,
      setLinks,
      validationSchema,
      projectName,
      setProjectName,
      genre,
      setGenre,
      projectDesc,
      setProjectDesc,
      genreOptions,
      timeframeOptions,
      timeframe,
      setTimeframe,
      trackList,
      setTrackList,
      isOpenDelTrackModal,
      setIsOpenDelTrackModal,
      openDelTrackModal,
      selectedTrackNo
    ],
  )

  return <BookProjectContext.Provider value={value}>{children}</BookProjectContext.Provider>
}

export const useBookProject = () => {
  const context = useContext(BookProjectContext)
  if (!context) {
    throw new Error("useBookProject must be used within a BookProjectProvider")
  }
  return context
}

export default BookProjectProvider
