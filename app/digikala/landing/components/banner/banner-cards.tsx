"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

export default function BannerCards({ items }: { items: any }) {
  const list = items.map((i: any) => (
    <Link key={i.id} href={i?.link ?? "#"} className="w-full">
      <Image
        src={i?.image}
        alt={i?.alt}
        width={i?.width ?? 314}
        height={i?.height ?? 240}
        className="h-auto rounded-xl"
      />
    </Link>
  ))

  return <div className="my-5 flex gap-3">{list}</div>
}
