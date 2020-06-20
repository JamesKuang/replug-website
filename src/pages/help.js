import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Help() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Link to="/">Home</Link>
        <Header headerText="Help" />
        <p>Get in touch!</p>
        <p>
          <a href="mailto:incyc.apps@gmail.com">incyc.apps@gmail.com</a>
        </p>
      </div>
    </Layout>
  )
}
