import JoiBase from "joi"
import { joiPasswordExtendCore } from "joi-password"

const JoiPassword = JoiBase.extend(joiPasswordExtendCore)

const validation = JoiBase.object({
  username: JoiBase.string().messages({
    "string.empty": `Please enter a valid username. Example: mor_2314`,
  }),
  userpass: JoiPassword.string().min(6).messages({
    "string.empty": `Your Password needs to be at least\n6 symbols.`,
    "string.min": `Your Password needs to be at least\n6 symbols.`,
  }),
})

export { validation }
