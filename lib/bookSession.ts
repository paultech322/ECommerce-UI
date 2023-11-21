export enum STEPS {
  CHOOSE_ROOM = "choose_room",
  CHOOSE_DATE = "choose_date",
  CHOOSE_TIME = "choose_time",
  ADD_DETAILS = "add_details",
}

export const availableTimes = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM",
  "01:00 AM",
]

export enum PAYMENTS {
  STRIPE = "stripe",
  PAYPAL = "paypal",
}
