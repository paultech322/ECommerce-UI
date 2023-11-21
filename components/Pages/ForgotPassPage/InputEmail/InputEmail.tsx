import { useRouter } from "next/router"
import { useAuth } from "../../../../providers/AuthProvider"
import Button from "../../../../shared/Button/Button"
import Form from "../../../../shared/Form"
import BackwardButton from "../../../BackwardButton"
import { validation } from "./validation"
import TextInput from "../../../TextInput"

const InputEmail = () => {
  const { STEPS, userEmail, setUserEmail, setCurStep } = useAuth()
  const router = useRouter()

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment

    <>
      <div className="pb-[60px]">
        <BackwardButton onClick={() => router.push("/signin")} className="mb-[30px]" />
        <p
          className="font-urwgeometric_medium leading-[48px]
              text-[48px] text-[#d2d2d2] pt-[30px]"
        >
          Reset your Password
        </p>
        <p
          className="font-urwgeometric text-[#d2d2d2] text-[16px] leading-[20px]
            pt-[20px]"
        >
          Please enter the email you used for your session account. We send you a link to
          <br />
          your email with a link to reset your password.
        </p>
      </div>
      <Form
        onSubmit={async () => {
          setCurStep(STEPS.SENT_REST_EMAIL)
        }}
        validationSchema={validation}
        className="flex-grow flex flex-col
            items-center justify-between
            w-full"
      >
        <TextInput
          type="text"
          id="useremail"
          name="useremail"
          value={userEmail}
          onChange={setUserEmail}
          placeholder="Enter Email..."
          label="Email"
          classNameError="!text-[#8C8C8C]"
        />
        <Button
          id="tell-about-you"
          type="submit"
          className="w-full h-[48px]
                text-black font-urwgeometric_bold
                border-r-[1px] border-r-[#A1EA04]
                border-l-[1px] border-l-[#A1EA04]
                border-b-[2px] border-b-[#A1EA04]
                shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
        >
          Send
        </Button>
      </Form>
    </>
  )
}

export default InputEmail
