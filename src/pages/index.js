import React from "react"
import Layout from "../components/layout"
import DownloadNow from "../components/download-now"

export default function Home() {
  return (
    <Layout>
      <div>
        <p>
          <h2>Replug</h2>
          Tesla Route Planner
        </p>
        <div style={{ display: `flex`, justifyContent: `center` }}>
          <DownloadNow />
        </div>
      </div>
    </Layout>
  )
}
