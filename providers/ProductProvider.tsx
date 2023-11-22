import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import getProductList from "../lib/fakestore/getProductList"
import { useRouter } from "next/router"
import getProductData from "../lib/fakestore/getProductData"
import { useUserProvider } from "./UserProvider"
import getCartData from "../lib/fakestore/getCartData"
import addNewCart from "../lib/fakestore/addNewCart"

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const router = useRouter()
  const pathname = router.pathname
  const id = router.query.id as any
  const { userId } = useUserProvider()

  const isProductPage = pathname.includes("/product")

  const [products, setProducts] = useState([])
  const [productDetail, setProductDetail] = useState(null)
  const [loading, setLoading] = useState(false)
  const [carts, setCarts] = useState([])
  
  const productId = useMemo(() => {
    if(isProductPage) return id  
  }, [pathname, id])

  const addCart = async () => {
    const response = await addNewCart(userId, [...carts, {
      quantity: 1,
      productId: productDetail?.id
    }])

    if(response.error) return

    router.push('/cart')
  }

  console.log("ZIAD", carts)
  
  const getAllCartData = useCallback(async () => {
    setLoading(true)
    const response = await getCartData(userId)
    setCarts(response)
    setLoading(false)
  }, [userId])

  const getAllProductData = useCallback(async () => {
    setLoading(true)
    const response = await getProductList()
    setProducts(response)
    setLoading(false)
  }, [])

  const getProductDetail = useCallback(async () => {
    setLoading(true)
    const response = await getProductData(productId)
    setProductDetail(response)
    setLoading(false)
  }, [productId])
  
  useEffect(() => {
    getAllProductData()
  }, [getAllProductData])

  useEffect(() => {
    getProductDetail()
  }, [getProductDetail])

  useEffect(() => {
    getAllCartData()
  }, [getAllCartData])

  const value = useMemo(
    () => ({ 
      products,
      getAllProductData,
      productDetail,
      getAllCartData,
      carts,
      loading,
      addCart
    }),
    [
      products,
      getAllProductData,
      getAllCartData,
      carts,
      productDetail,
      loading,
      addCart
    ],
  )

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider")
  }
  return context
}

export default ProductProvider
