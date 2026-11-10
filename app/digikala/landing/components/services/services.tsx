"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EllipsisIcon  } from "lucide-react"
import { items } from "@/app/digikala/_data/services.data"
import Link from "next/link"

export default function Services({
  items,
}: Readonly<{
  items: any
}>) {
  if (!Array.isArray(items) || items?.length == 0) return <div />

  const list = items.map((i: any) => (
    <Link key={i.id} href={i?.link ?? "#"}>
      <div>
        <div>
          <Image
            src={i.image}
            alt={i.name}
            width="52"
            height="52"
            className="mx-auto mb-2"
          />
        </div>
        <div>{i.name}</div>
      </div>
    </Link>
  ))

  return (
    <div
      className={"flex justify-between gap-4 py-6 text-center f-12 font-bold"}
    >
      {list}
      <div>
        <div className="mx-auto mb-2">
          <Button size="icon" className="p-6" variant="secondary">
            <EllipsisIcon size="60" />
          </Button>
        </div>
        <div>
          <span>بیشتر</span>
        </div>
      </div>
    </div>
  )
}
