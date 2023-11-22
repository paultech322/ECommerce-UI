import React, { createContext, useContext, useMemo } from "react"

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {

  const value = useMemo(
    () => ({ 

    }),
    [

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
