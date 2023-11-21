import useIsMobile from "../../hooks/useIsMobile"
import ClipSpan from "../ClipSpan"

const WelcomeText = () => {
  const isMobile = useIsMobile()

  return (
    <div>
      <p
        className="text-[36.1px] samsungS8:text-[40.6px] xs:text-[44px] md:text-[64px] text-[#d2d2d2]
              font-urwgeometric_medium
              leading-[100%]"
      >
        Your next <ClipSpan>session</ClipSpan>
        <br />
        awaits you.
      </p>
      <p
        className="text-[13.12px] samsungS8:text-[14.7px] xs:text-[16px] text-[#D2D2D2]
              font-urwgeometric_medium
              pt-[1.5vh]"
      >
        {isMobile ? (
          <>
            <ClipSpan>Electric Lady Studios</ClipSpan> is excited to welcome you to
            <br />
            their world class studio. Quickly sign up or log in
            <br />
            to book your session.
          </>
        ) : (
          <>
            <ClipSpan>Electric Lady Studios</ClipSpan> is excited to welcome you to their world
            class studio.
            <br />
            Quickly sign up or log in to book your session.
          </>
        )}
      </p>
    </div>
  )
}

export default WelcomeText
