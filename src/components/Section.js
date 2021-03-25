import * as React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { section } from "../styles/section.module.css"

const Section = ({ children, className="", backgroundColor, color }) => {
  return (
    <div
      className={cx(section, className)}
      style={{ backgroundColor, color }}
    >
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
