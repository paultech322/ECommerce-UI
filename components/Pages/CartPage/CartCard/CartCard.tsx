import { useState } from "react"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import useCartData from "../../../../hooks/useCartData"
import TextInput from "../../../TextInput"
import Form from "../../../../shared/Form"
import { validation } from "./validation"
import { useProduct } from "../../../../providers/ProductProvider"
import { removeCart, updateQuantity } from "../../../../lib/firebase"

const CartCard = ({ data }) => {
  const { imageUri, title, price } = useCartData(data?.productId)
  const [quantity, setQuantity] = useState(data?.quantity)
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false)
  const [isRemovingCart, setIsRemovingCart] = useState(false)
  const { getAllCartData } = useProduct()

  const updateQuantityAmount = async () => {
    setIsUpdatingQuantity(true)
    await updateQuantity(data?.id, quantity)
    await getAllCartData()
    setIsUpdatingQuantity(false)
  }

  const remove = async () => {
    setIsRemovingCart(true)
    await removeCart(data?.id)
    await getAllCartData()
    setIsRemovingCart(false)
  }

  return (
    <div className="flex justify-center col-span-1">
      <div
        className="flex flex-col items-start
              xl:w-[384px] lg:w-[307.2px] md:w-[230.4px] w-full
              md:py-[9px] lg:py-[12px] xl:py-[15px]
              md:px-[12px] lg:px-[16px] xl:px-[20px] 
              p-[20px]
              rounded-[10px] md:rounded-[10px]
              bg-white dark:bg-[#1A2629]
              shadow-[2px_10px_20px_4px_#54b3c34f] dark:shadow-[2px_10px_20px_4px_#1B1B1C]"
      >
        <div
          className="w-full aspect-[1/1]
        overflow-hidden rounded-[10px] cursor-pointer"
        >
          <Media
            type="image"
            link={imageUri}
            blurLink={imageUri}
            containerClasses="w-full aspect-[1/1] hover:scale-[1.3]
            transition duration-[400ms]"
          />
        </div>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium col-span-7
          pt-[20px] pb-[10px]"
        >
          {title}
        </p>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium"
        >
          <span className="text-[#B4DCE3]">Quantity:</span> {data?.quantity}
        </p>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium"
        >
          <span className="text-[#B4DCE3]">USD Amount:</span> ${price} * {data?.quantity}
        </p>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium"
        >
          <span className="text-[#B4DCE3]">Total Amount:</span> $
          {parseFloat(price) * parseFloat(data?.quantity)}
        </p>
        <div
          className="flex-grow flex items-end justify-end w-full
        gap-x-[10px]"
        >
          <Form
            onSubmit={updateQuantityAmount}
            validationSchema={validation}
            className="w-full flex flex-col gap-y-[20px] mt-[30px]"
          >
            <TextInput
              label="Quantity"
              type="number"
              value={quantity}
              onChange={setQuantity}
              placeholder="Input Quantity Amount"
              id="quantity"
              hookToForm
            />
            <div
              className="w-full flex flex-col  lg:flex-row gap-[10px]
            items-start lg:items-center"
            >
              <Button
                id="product-update"
                type="submit"
                className={`cursor-pointer
                font-poppins_semibold text-[14px]
                ${
                  isUpdatingQuantity
                    ? "bg-[lightgray] text-[white] cursor-not-allowed"
                    : "bg-[#54B3C3] text-[white]"
                }
                !rounded-full bg-[#54B3C3]
                lg:w-[170px] aspect-[170/35] w-[140px]`}
              >
                Update Quantity
              </Button>
              <Button
                id="product-remove"
                className={`cursor-pointer
                font-poppins_semibold :text-[14px]
                ${
                  isRemovingCart
                    ? "bg-[lightgray] text-[white] cursor-not-allowed"
                    : "bg-[#b50808] text-[white]"
                }
                !rounded-full
                lg:w-[120px] aspect-[120/35] w-[90px]`}
                onClick={remove}
              >
                Remove
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CartCard
