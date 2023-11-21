import { useAuth } from "../../../../providers/AuthProvider"
import Checkbox from "../../../../shared/Checkbox"

const Policies = () => {
  const { isSharingData, setIsSharingData, isPolicyApproved, setIsPolicyApproved } = useAuth()

  return (
    <div className="flex flex-col gap-y-[30px]">
      <button
        className={`rounded-[24px]
        border-r-[#d2d2d20f] border-r-[1px]
        border-l-[#d2d2d20f] border-l-[1px]
        border-b-[2px] border-b-[#d2d2d20f]
        bg-[#d2d2d20f]
            ${isSharingData ? "!border-[1px] !border-[#A1EA04]" : ""}`}
        type="button"
      >
        <div
          className="px-[15px] py-[20px]
                border-[#d2d2d20f]
                flex items-center gap-x-[10px]
                shadow-[0px_1.5px_0px_2.5px_#d2d2d208] rounded-[24px]"
        >
          <Checkbox
            checked={isSharingData}
            id="allow_sharing_data"
            onClick={() => setIsSharingData(!isSharingData)}
          />
          <p className="text-[14px] font-urwgeometric text-[#d2d2d2]">
            Share my personal data for marketing purposes with Session. I know that my
            <br />
            data, as described in our Data Policy, might be used for marketing purposes.
          </p>
        </div>
      </button>
      <button
        className={`rounded-[24px]
        border-r-[#d2d2d20f] border-r-[1px]
        border-l-[#d2d2d20f] border-l-[1px]
        border-b-[2px] border-b-[#d2d2d20f]
        bg-[#d2d2d20f]
            ${isPolicyApproved ? "!border-[1px] !border-[#A1EA04]" : ""}`}
        type="button"
      >
        <div
          className="px-[15px] py-[20px]
                border-[#d2d2d20f]
                flex items-center gap-x-[15px]
                shadow-[0px_1.5px_0px_2.5px_#d2d2d208] rounded-[24px]"
        >
          <Checkbox
            checked={isPolicyApproved}
            id="agree_policy"
            onClick={() => setIsPolicyApproved(!isPolicyApproved)}
          />
          <p
            className="text-[14px] font-urwgeometric text-[#d2d2d2]
                    text-left"
          >
            I agree to the{" "}
            <a className="text-[#A1EA04] underline" href="/terms" target="_blank">
              Terms of Service
            </a>{" "}
            of Session.
            <br />
            <br />
            You want to know about how Session uses and protects personal data,
            <br />
            read our{" "}
            <a className="text-[#A1EA04] underline" href="/policy" target="_blank">
              Data Policy.
            </a>
          </p>
        </div>
      </button>
    </div>
  )
}

export default Policies
