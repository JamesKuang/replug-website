import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <div>
        <h1>Replug for iOS!</h1>
        <p>Tesla Route Planner</p>
        <a href="https://apps.apple.com/us/app/replug/id1279136790">Download from App Store!</a>
      </div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div >
  )
}
