import * as React from "react"
import PropTypes from "prop-types"
import { block, rounded } from "../styles/block.module.css"

const Block = ({
  children,
  variant="rounded",
  height="auto",
  width="auto",
}) => {
  return (
    <div
      className={variant === "rounded" ? rounded : block}
      style={{
        height,
        width,
      }}
    >
      {children}
    </div>
  )
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Block
