"use client"

import * as React from "react"
import Product from "@/app/landing/components/products/product"

export default function Products({
  items,
  border,
  gride = false,
  children,
}: Readonly<{
  items: any
  border?: boolean
  gride?: boolean
  children?: React.ReactNode
}>) {
  const list = items.map((i: any) => (
    <div
      key={i?.id}
      className={
        !gride
          ? "flex items-stretch"
          : "flex w-full items-center justify-center border border-gray-100"
      }
      style={!gride ? { minWidth: "154px", width: "164px" } : {}}
    >
      <Product data={i} border={border} imageSize={240} grid={gride} />
    </div>
  ))

  return (
    <div className="scrollbar-hide overflow-hidden overflow-x-auto rounded-r-md">
      <div
        className={
          gride
            ? "grid w-full grid-cols-4 items-stretch justify-items-center"
            : "flex w-auto items-stretch gap-3"
        }
      >
        {children}
        {list}
        {!gride && <div className="px-10" />}
      </div>
    </div>
  )
}
