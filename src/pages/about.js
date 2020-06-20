import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="About Me" />
        <Header headerText="I'm pretty cool" />
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  )
}
