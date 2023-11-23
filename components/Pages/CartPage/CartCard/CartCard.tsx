import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import useCartData from "../../../../hooks/useCartData"

const CartCard = ({ data }) => {
  const router = useRouter()
  const { imageUri, title } = useCartData(data?.productId)

  return (
    <div className="flex justify-center col-span-1">
      <div
        className="flex flex-col items-start
              xl:w-[384px] 
              lg:w-[307.2px] 
              md:w-[230.4px] 
              w-full
              mx-[20px] md:mx-0
              md:py-[9px] lg:py-[12px] xl:py-[15px]
              md:px-[12px] lg:px-[16px] xl:px-[20px]
              p-[20px]
              rounded-[10px] md:rounded-[10px]
              bg-white dark:bg-[#1A2629]
              shadow-[2px_10px_20px_4px_#54b3c34f] dark:shadow-[2px_10px_20px_4px_#1B1B1C]"
      >
        <div
          className="xl:w-full aspect-[1/1]
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
          py-[20px]"
        >
          {title}
        </p>
        <div
          className="flex-grow flex items-end justify-end w-full
        gap-x-[10px]"
        >
          <Button
            id="product-detail"
            className="cursor-pointer
            font-poppins_semibold
            md:text-[14px]
            !rounded-full bg-[#54B3C3]
            lg:w-[120px] aspect-[120/35] md:w-[90px]"
            onClick={() => router.push(`/product/${data.id}`)}
          >
            Update
          </Button>
          <Button
            id="product-remove"
            className="cursor-pointer
            font-poppins_semibold
            md:text-[14px]
            !rounded-full bg-[#b50808]
            lg:w-[120px] aspect-[120/35] md:w-[90px]"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartCard