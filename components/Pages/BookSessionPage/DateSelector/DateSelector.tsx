import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker"
import { useBookSession } from "../../../../providers/BookSessionProvider"
import FadeIn from "../../../FadeIn"

const DateSelector = () => {
  const { STEPS, setSelectedDay, selectedDay, setCurStep } = useBookSession()

  const myCustomLocale = {
    // months list by order
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    // week days by order
    weekDays: [
      {
        name: "Monday",
        short: "MON",
      },
      {
        name: "Tuesday",
        short: "TUE",
      },
      {
        name: "Wednesday",
        short: "WED",
      },
      {
        name: "Thursday",
        short: "THU",
      },
      {
        name: "Friday",
        short: "FRI",
      },
      {
        name: "Saturday",
        short: "SAT",
        isWeekend: true,
      },
      {
        name: "Sunday", // used for accessibility
        short: "SUN", // displayed at the top of days' rows
        isWeekend: true, // is it a formal weekend or not?
      },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 6,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject
    },

    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day)
    },

    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate()
    },

    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit
    },

    // texts in the date picker
    nextMonth: "Next Month",
    previousMonth: "Previous Month",
    openMonthSelector: "Open Month Selector",
    openYearSelector: "Open Year Selector",
    closeMonthSelector: "Close Month Selector",
    closeYearSelector: "Close Year Selector",
    defaultPlaceholder: "Select...",

    // for input range value
    from: "from",
    to: "to",

    // used for input value when multi dates are selected
    digitSeparator: ",",

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
  }

  const onSelectDate = (value) => {
    setSelectedDay(value)
    setCurStep(STEPS.CHOOSE_TIME)
  }

  return (
    <FadeIn className="w-full md:pt-[24px] lg:pt-[32px] xl:pt-[40px]">
      <Calendar
        value={selectedDay}
        onChange={onSelectDate}
        calendarClassName="session-calendar"
        minimumDate={utils("en").getToday()}
        locale={myCustomLocale}
        calendarTodayClassName="after:!content-[''] after:!h-0"
      />
    </FadeIn>
  )
}

export default DateSelector
