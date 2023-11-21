import JoiBase from "joi"

export const validation = {
  bandName: JoiBase.string().messages({
    "string.empty": `Your Band Name cannot be empty`,
  }),
  projectName: JoiBase.string().messages({
    "string.empty": `Your Project Name cannot be empty`,
  }),
  projectDesc: JoiBase.string().messages({
    "string.empty": `Please describe your Project. Enter at least X characters to describe`,
  }),
  genre: JoiBase.string().messages({
    "string.empty": `Please select genre`,
  }),
  timeframe: JoiBase.string().messages({
    "string.empty": `Please select timeframe`,
  }),
}

export enum STEPS {
  ADD_DETAIL = "add_detail",
  ADD_TRACKLIST = "add_tracklist",
  PRICE_ESTIMATE = "price_estimate",
  SUCCESS = "booked_project_success",
}

export const timeframeOptions = [
  {
    value: "2-weeks",
    label: "Within 2 weeks",
  },
  {
    value: "a-month",
    label: "Within a month",
  },
  {
    value: "2-months",
    label: "Within 2 months",
  },
  {
    value: "3-months",
    label: "Within 3 months",
  },
  {
    value: "6-months",
    label: "Within 6 months",
  },
  {
    value: "next-year",
    label: "Within the next year",
  },
]

export const genreOptions = [
  {
    value: "hip_hop",
    label: "Hip Hop",
  },
  {
    label: "Pop",
    value: "pop",
  },
  {
    value: "edm",
    label: "EDM",
  },
  {
    value: "jazz",
    label: "Jazz",
  },
  {
    value: "electro",
    label: "Electro",
  },
  {
    value: "house",
    label: "House",
  },
  {
    value: "rap",
    label: "Rap",
  },
]
