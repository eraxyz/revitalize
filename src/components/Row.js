import * as React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { row } from "../styles/row.module.css"

const Row = ({ children, className="", height="auto", width="auto" }) => {
  return (
    <div
      className={cx(row, className)}
      style={{
        height,
        width,
      }}
    >
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Row
