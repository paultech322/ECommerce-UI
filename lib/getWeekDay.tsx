function getWeekDay(day) {
  const date = new Date()
  date.setMonth(day?.month || 1 - 1)
  date.setFullYear(day?.year || 1997)
  date.setDate(day?.day || 1)

  return date.toLocaleString("en-US", {
    weekday: "long",
  })
}

export default getWeekDay
