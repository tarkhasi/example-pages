import React from "react"

type BoxProps = React.ComponentProps<"div"> & {
  width?: React.CSSProperties["width"]
  height?: React.CSSProperties["height"]
}

const Box: React.FC<BoxProps> = ({
  width,
  height,
  className = "",
  style,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={className}
      style={{
        ...style,
        ...(width !== undefined && { width }),
        ...(height !== undefined && { height }),
      }}
    >
      {children}
    </div>
  )
}

export default Box
