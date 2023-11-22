import JoiBase from "joi"
import { joiPasswordExtendCore } from "joi-password"

const JoiPassword = JoiBase.extend(joiPasswordExtendCore)

const validation = JoiBase.object({
  username: JoiBase.string()
    .messages({
      "string.empty": `Please enter a valid username. Example: mor_2314`
    }),
  userpass: JoiPassword.string().min(8).messages({
    "string.empty": `Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.`,
    "string.min":
      "Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.",
  }),
})

export { validation }
