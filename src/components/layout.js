import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginLeft: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h2 style={{ display: `inline` }}>Replug</h2>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="https://apps.apple.com/us/app/replug/id1279136790">Download</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/help">Help</ListLink>
        </ul>
      </header>
      {children}
      <footer style={{ marginTop: `1.5rem` }}>
        <ul style={{ listStyle: `none`, float: `none` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/privacy-policy">Privacy Policy</ListLink>
        </ul>
      </footer>
    </div>
  )
}
