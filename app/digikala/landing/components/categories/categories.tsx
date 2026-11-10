"use client"

import * as React from "react"
import Image from "next/image"

export default function Categories({
  items,
}: Readonly<{
  items: any
}>) {
  const list = items.map((i: any) => (
    <div key={i.id} className="text-center">
      <div>
        <Image
          src={i.image}
          alt={i.name}
          width="100"
          height="100"
          className="mx-auto mb-2"
        />
      </div>
      <div className="f-12">{i.name}</div>
    </div>
  ))

  return <div className={"grid grid-cols-9 gap-4"}>{list}</div>
}
