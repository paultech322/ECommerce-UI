import { useBookProject } from "../../../../providers/BookProjectProvider"
import Button from "../../../../shared/Button"
import Form from "../../../../shared/Form"
import Media from "../../../../shared/Media"
import FadeIn from "../../../FadeIn"
import SelectBox from "../../../SelectBox"
import TextInput from "../../../TextInput"
import AddLinks from "../AddLinks"
import SelectTimeframe from "../SelectTimeframe"
import SingleStudio from "../SingleStudio"

const AddDetail = () => {
  const {
    bandName,
    setBandName,
    validationSchema,
    projectName,
    setProjectName,
    genre,
    setGenre,
    genreOptions,
    projectDesc,
    setProjectDesc,
    STEPS,
    setCurStep,
  } = useBookProject()

  return (
    <Form
      className="w-full grid grid-cols-2 md:pt-[24px] lg:pt-[32px] xl:pt-[40px]
      md:gap-x-[24px] lg:gap-x-[32px] xl:gap-x-[40px]"
      onSubmit={async () => {
        setCurStep(STEPS.ADD_TRACKLIST)
      }}
      validationSchema={validationSchema}
    >
      <FadeIn>
        <SingleStudio />
        <div className="md:py-[24px] lg:py-[32px] xl:py-[40px]">
          <TextInput
            type="text"
            id="bandName"
            name="bandName"
            value={bandName}
            onChange={setBandName}
            placeholder="Enter your Artist/Band Name"
            label="Artist/Band Name"
          />
          <AddLinks />
        </div>
      </FadeIn>
      <FadeIn className="flex flex-col md:gap-y-[14.4px] xl:gap-y-[19.2px] gap-y-[24px]">
        <div className="flex gap-x-[5px] items-center">
          <Media
            type="image"
            link="/images/BookProject/project.svg"
            blurLink="/images/BookProject/project.png"
            containerClasses="md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
          />
          <p
            className="text-[#d2d2d2] font-urwgeometric_bold
          md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
          leading-[100%]"
          >
            Project Details
          </p>
        </div>
        <TextInput
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={setProjectName}
          placeholder="Enter your Project Name..."
          label="Project Name"
        />
        <SelectBox
          id="genre"
          name="genre"
          value={genre?.value}
          onChange={setGenre}
          placeholder="Choose the genre of your Project"
          label="Genre"
          options={genreOptions}
        />
        <TextInput
          type="text"
          id="projectDesc"
          name="projectDesc"
          value={projectDesc}
          onChange={setProjectDesc}
          placeholder="Enter your Project Name..."
          label="Project Description"
          variant="multiple"
        />
        <SelectTimeframe />
      </FadeIn>
      <div
        className="col-span-2 
      md:pt-[24px] lg:pt-[32px] xl:pt-[40px]
      flex justify-center"
      >
        <Button
          id="add-detail"
          type="submit"
          className="md:w-[201px] lg:w-[268px] xl:w-[335px] aspect-[335/48]
              text-black font-urwgeometric_bold
              rounded-full md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
          pulseColor="white"
        >
          Continue
        </Button>
      </div>
    </Form>
  )
}

export default AddDetail
