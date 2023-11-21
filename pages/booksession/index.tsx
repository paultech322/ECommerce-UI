import BookSessionPage from "../../components/Pages/BookSessionPage"
import BookSessionProvider from "../../providers/BookSessionProvider"

const BookSession = () => (
  <BookSessionProvider>
    <BookSessionPage />
  </BookSessionProvider>
)

export default BookSession
