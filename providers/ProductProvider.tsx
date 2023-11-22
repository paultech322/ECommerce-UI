import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import getProductList from "../lib/fakestore/getProductList"
import { useRouter } from "next/router"
import getProductData from "../lib/fakestore/getProductData"

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const router = useRouter()
  const pathname = router.pathname
  const id = router.query.id as any
  
  const isProductPage = pathname.includes("/product")

  const [products, setProducts] = useState([])
  const [productDetail, setProductDetail] = useState(null)
  const [loading, setLoading] = useState(false)

  const productId = useMemo(() => {
    if(isProductPage) return id  
  }, [pathname, id])

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

  const value = useMemo(
    () => ({ 
      products,
      getAllProductData,
      productDetail,
      loading
    }),
    [
      products,
      getAllProductData,
      productDetail,
      loading
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
