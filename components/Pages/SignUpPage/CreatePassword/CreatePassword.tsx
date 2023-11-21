import { useAuth } from "../../../../providers/AuthProvider"
import Button from "../../../../shared/Button/Button"
import Form from "../../../../shared/Form"
import BackwardButton from "../../../BackwardButton"
import ProgressBar from "../../../../shared/ProgressBar"
import TextInput from "../../../TextInput"
import { validation } from "./validation"

const CreatePassword = () => {
  const { STEPS, userPassword, setUserPassword, setCurStep, totalStep } = useAuth()

  return (
    <>
      <div>
        <BackwardButton onClick={() => setCurStep(STEPS.INPUT_EMAIL)} className="mb-[30px]" />
        <ProgressBar value={(1 / totalStep) * 100} />
        <p
          className="font-urwgeometric_medium
text-[48px] text-[#d2d2d2] pt-[15px] pb-[50px]"
        >
          Create a Password
        </p>
      </div>
      <Form
        onSubmit={async () => {
          setCurStep(STEPS.CHECK_POLICIES)
        }}
        validationSchema={validation}
        className="flex-grow flex flex-col
      items-center justify-between
      w-full"
      >
        <TextInput
          type="password"
          id="userpass"
          name="userpass"
          value={userPassword}
          onChange={setUserPassword}
          placeholder="Enter Password..."
          label="Password"
          classNameError="!text-[#8C8C8C]"
          infoText={
            "Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers."
          }
        />
        <Button
          id="create-password"
          type="submit"
          className="w-full h-[48px]
          text-black font-urwgeometric_bold
          border-r-[1px] border-r-[#A1EA04]
          border-l-[1px] border-l-[#A1EA04]
          border-b-[2px] border-b-[#A1EA04]
          shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
        >
          Continue
        </Button>
      </Form>
    </>
  )
}

export default CreatePassword
