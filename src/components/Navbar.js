
import React from 'react'
import { Link } from 'gatsby'
import { links, linkText } from '../styles/layout.module.css'

export default function Navbar() {
  return (
    <nav>
      <div className={links}>
        {/* <Link className={linkText} to="/">Home</Link> */}
        {/* <Link className={linkText} to="/about">About</Link> */}
        {/* <Link to="/projects">Our Projects</Link> */}
        {/* <Link to="/properties">Properties</Link> */}
      </div>
    </nav>
  )
}