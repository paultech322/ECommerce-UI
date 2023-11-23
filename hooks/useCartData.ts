import { useEffect, useState } from "react"
import { useProduct } from "../providers/ProductProvider"

const useCartData = (productId) => {
  const { products } = useProduct()
  const [imageUri, setImageUri] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (!productId) return

    const product = products.find((product) => product.id === productId)

    setImageUri(product.image)
    setTitle(product.title)
  }, [productId])

  return {
    imageUri,
    title,
  }
}

export default useCartData
