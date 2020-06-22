import React from "react"
import ListLink from "../components/list-link"
import { Flex } from "theme-ui"

const FooterNav = () => (
  <ul style={{ listStyle: `none`, display: `flex`, justifyContent: `center` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/privacy-policy">Privacy Policy</ListLink>
  </ul>
)

const ByLine = () => (
  <div style={{ display: `flex`, justifyContent: `center` }}>
    <p>
      By <a href="https://jameskuang.com">James Kuang</a> (<a href="https://twitter.com/jamskuang">@jamskuang</a>)
    </p>
  </div>
)

const Copyright = () => (
  <div style={{ display: `flex`, justifyContent: `center` }}>
    © 2020 Jie Hui Kuang
  </div>
)

const Footer = () => (
  <footer style={{ backgroundColor: `#f9faf9`, marginTop: `1.5rem`, display: `flex`, flexDirection: `column` }}>
    <FooterNav />
    <ByLine />
    <Copyright />
  </footer>
)

export default Footer
