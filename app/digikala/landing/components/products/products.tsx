"use client"

import * as React from "react"
import Product from "@/app/digikala/landing/components/products/product"
import { cn } from "@/lib/utils"

export default function Products({
  items,
  border,
  grid = false,
  gap = null,
  children,
}: Readonly<{
  items: any
  border?: boolean
  grid?: boolean
  gap?: number | string | null
  children?: React.ReactNode
}>) {
  if (!Array.isArray(items) || items?.length == 0) return <div />

  const list = items.map((i: any) => (
    <div
      key={i?.id}
      className={
        !grid
          ? "flex items-stretch"
          : "flex w-full items-center justify-center border border-gray-100"
      }
      style={!grid ? { minWidth: "154px", width: "164px" } : {}}
    >
      <Product data={i} border={border} imageSize={240} grid={grid} />
    </div>
  ))

  return (
    <div className="scrollbar-hide overflow-hidden overflow-x-auto rounded-r-md">
      <div
        className={cn(
          grid
            ? "grid w-full grid-cols-4 items-stretch justify-items-center"
            : "flex w-auto items-stretch",
          "gap-" + (gap ?? "3")
        )}
      >
        {children}
        {list}
        {!grid && <div className="px-10" />}
      </div>
    </div>
  )
}
