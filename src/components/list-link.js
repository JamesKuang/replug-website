import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginLeft: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ListLink