import { updateQuantity } from "../lib/firebase"

const useUpdateQuantity = () => {
  const updateQuantityAmount = async (cartId, quantityAmount) => {
    await updateQuantity(cartId, quantityAmount)
  }

  return {
    updateQuantityAmount,
  }
}

export default useUpdateQuantity
