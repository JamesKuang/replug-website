import React from "react"
import ListLink from "../components/list-link"

const FooterNav = () => (
  <ul style={{ listStyle: `none`, display: `flex`, justifyContent: `center` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/privacy-policy">Privacy Policy</ListLink>
  </ul>
)

const Copyright = () => (
  <div style={{ display: `flex`, justifyContent: `center` }}>
    <p>© Jie Hui Kuang</p>
  </div>
)

const Footer = () => (
  <footer style={{ marginTop: `1.5rem` }}>
    <FooterNav />
    <Copyright />
  </footer>
)

export default Footer
