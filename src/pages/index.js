import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <Link to="/contact/">Contact</Link>
        <h1>Replug for iOS!</h1>
        <p>Tesla Route Planner</p>
        <a href="https://apps.apple.com/us/app/replug/id1279136790">Download from App Store!</a>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  )
}
