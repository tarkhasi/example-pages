"use client"

import * as React from "react"
import Image from "next/image"
import Box from "@/components/box"

export default function Brands({
  items,
  children,
}: Readonly<{
  items: any
  children?: React.ReactNode
}>) {
  const list = items.map((i: any) => (
    <div
      key={i?.id}
      className="overflow-hidden rounded-md border border-neutral-200! pb-2  text-center"
      style={{ minWidth: "90px", width: "90px" }}
    >
      <Box width={90} height={90} className="flex items-center justify-center px-1">
        <Image
          src={i?.image}
          alt={i?.name}
          width="90"
          height="90"
          className="object-contain w-auto"
        />
      </Box>
      <div className="f-12 font-bold text-neutral-600">{i?.name}</div>
    </div>
  ))
  return (
    <div className="scrollbar-hide overflow-hidden overflow-x-auto rounded-r-md">
      <div className="flex w-auto items-stretch gap-3">
        {children}
        {list}
        <div className="px-10"></div>
      </div>
    </div>
  )
}
