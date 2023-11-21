/* eslint-disable */
import { useRouter } from "next/router"
import Form from "../../../shared/Form"
import Layout from "../../Layout"
import WelcomeText from "../../WelcomeText"
import { validation } from "./validation"
import Divider from "../../Divider"
import SocialButtons from "../../SocialButtons"
import Button from "../../../shared/Button"
import InputForm from "./InputForm"
import ClipSpan from "../../ClipSpan"
import Media from "../../../shared/Media"
import FadeIn from "../../FadeIn"

const SignInPage = () => {
  const router = useRouter()

  return (
    <Layout type="full">
      <FadeIn
        className="pt-[3vh] h-full
            flex flex-col"
      >
        <WelcomeText />
        <div className="flex-grow flex items-end">
          <Form
            onSubmit={async () => {
              router.push("/booktype")
            }}
            validationSchema={validation}
            className="w-full flex flex-col"
          >
            <SocialButtons />
            <Divider className="py-[2vh]" />
            <InputForm />
            <button
              type="button"
              onClick={() => router.push("/forgotpass")}
              className="pt-[8px] ml-[20px]
              flex items-center gap-x-[4px]"
            >
              <Media
                type="image"
                link="/images/SignIn/info.svg"
                blurLink="/images/SignIn/info.png"
                containerClasses="w-[10px] aspect-[1/1]"
              />
              <p className="text-[#8c8c8c] font-urwgeometric text-[10px] leading-[12px] underline">
                Forgot Password?
              </p>
            </button>
            <Button
              id="log-in"
              type="submit"
              className="w-full h-[48px] mt-[2vh]
              text-black font-urwgeometric_bold
              border-r-[1px] border-r-[#A1EA04]
              border-l-[1px] border-l-[#A1EA04]
              border-b-[2px] border-b-[#A1EA04]
              shadow-[0px_0px_40px_0px_#a1ea0466]"
              pulseColor="white"
            >
              Log In
            </Button>
            <p
              className="text-[#d2d2d2] font-urwgeometric
                text-[12px] pt-[2vh] text-center"
            >
              Don't have an account? &nbsp;
              <button
                type="button"
                onClick={() => router.push("/signup")}
                className="border-b-[1px] border-b-[#a1ea04]"
              >
                <ClipSpan className="font-urwgeometric_bold">Sign up</ClipSpan>
              </button>
            </p>
          </Form>
        </div>
      </FadeIn>
    </Layout>
  )
}

export default SignInPage
