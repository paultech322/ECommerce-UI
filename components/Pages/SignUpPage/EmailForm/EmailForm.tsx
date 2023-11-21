import { useRouter } from "next/router"
import TextInput from "../../../TextInput"
import ClipSpan from "../../../ClipSpan"
import Button from "../../../../shared/Button/Button"
import Divider from "../../../Divider"
import Form from "../../../../shared/Form"
import SocialButtons from "../../../SocialButtons"
import { validation } from "./validation"
import { useAuth } from "../../../../providers/AuthProvider"

const EmailForm = () => {
  const { userEmail, setUserEmail, setCurStep, STEPS } = useAuth()
  const router = useRouter()

  return (
    <Form
      onSubmit={async () => {
        setCurStep(STEPS.CREATE_PASSWORD)
      }}
      validationSchema={validation}
      className="w-full flex flex-col"
    >
      <SocialButtons />
      <Divider className="py-[20px] samsungS8:py-[25px] xs:py-[30px]" />
      <TextInput
        type="text"
        id="useremail"
        name="useremail"
        value={userEmail}
        onChange={setUserEmail}
        placeholder="Enter Email..."
        label="Email"
      />
      <Button
        id="create-email"
        type="submit"
        className="w-full h-[48px] 
                mt-[20px] samsungS8:mt-[25px] xs:mt-[30px]
                text-black font-urwgeometric_bold
                border-r-[1px] border-r-[#A1EA04]
                border-l-[1px] border-l-[#A1EA04]
                border-b-[2px] border-b-[#A1EA04]
                shadow-[0px_0px_40px_0px_#a1ea0466]"
        pulseColor="white"
      >
        Sign up
      </Button>
      <p
        className="text-[#d2d2d2] font-urwgeometric
          text-[12px] pt-[20px] samsungS8:pt-[25px] xs:pt-[30px] text-center"
      >
        Already have an account? &nbsp;
        <button
          type="button"
          onClick={() => router.push("/signin")}
          className="border-b-[1px] border-b-[#a1ea04]"
        >
          <ClipSpan className="font-urwgeometric_bold">Log In</ClipSpan>
        </button>
      </p>
    </Form>
  )
}

export default EmailForm
