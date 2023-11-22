import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"

import { ThemeProvider } from "../providers/ThemeProvider"
import UserProvider from "../providers/UserProvider"
import ProductProvider from "../providers/ProductProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <ProductProvider>
          <SessionProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </SessionProvider>
        </ProductProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
export default MyApp
