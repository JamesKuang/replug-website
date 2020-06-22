import React from "react"
import ListLink from "../components/list-link"
import { Link } from "gatsby"
import ReplugIcon from "../assets/replug_icon_small.png"

const Header = props => (
  <header style={{ marginBottom: `1.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <img src={ReplugIcon} />
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="https://apps.apple.com/us/app/replug/id1279136790">Download</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/help">Help</ListLink>
    </ul>
  </header>
)

export default Header
