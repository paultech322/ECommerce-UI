import Layout from "../../Layout"
import BookProject from "./BookProject"
import BookSession from "./BookSession"
import Container from "../../Container"
import FadeIn from "../../FadeIn"

const BookTypePage = () => (
  <Layout type="base">
    <FadeIn className="w-full md:px-[33px] lg:px-[44px] xl:px-[55px]">
      <Container containerClassName="mt-[60px]">
        <p
          className="font-urwgeometric 
          text-[24px] lg:text-[32px]
                      text-[#d2d2d2] text-left w-full"
        >
          Choose Booking
        </p>
        <div
          className="grid grid-cols-2 gap-x-[30px] w-full
        md:pt-[18.75px] lg:pt-[25px]"
        >
          <BookSession />
          <BookProject />
        </div>
      </Container>
    </FadeIn>
  </Layout>
)

export default BookTypePage
