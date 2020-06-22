import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
// import Theme from "../gatsby-plugin-theme-ui/index"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
