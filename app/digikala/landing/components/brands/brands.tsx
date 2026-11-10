"use client"

import * as React from "react"
import Image from "next/image"
import Box from "@/components/box"
import { cn } from "@/lib/utils"

export default function Brands({
  items,
  children,
  className,
}: Readonly<{
  items: any
  children?: React.ReactNode
  className?: string
}>) {
  if (!Array.isArray(items) || items.length === 0) return null

  const list = items.map((i: any) => (
    <div
      key={i?.id}
      className="shrink-0 overflow-hidden rounded-md border border-neutral-200! pb-2 text-center"
      style={{ minWidth: "90px", width: "90px" }}
    >
      <Box
        width={90}
        height={90}
        className="flex items-center justify-center px-1"
      >
        <Image
          src={i?.image}
          alt={i?.name ?? ""}
          width={90}
          height={90}
          className="h-auto w-auto object-contain"
        />
      </Box>

      <div className="f-12 font-bold text-neutral-600">{i?.name}</div>
    </div>
  ))

  return (
    <div className={cn("flex w-max min-w-full items-stretch gap-3", className)}>
      {children}
      {list}
      <div className="shrink-0 px-10" />
    </div>
  )
}
