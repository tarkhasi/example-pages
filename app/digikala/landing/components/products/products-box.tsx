"use client"

import * as React from "react"
import Products from "@/app/digikala/landing/components/products/products"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"

export default function ProductsBox({
  title,
  subtitle,
  moreLink,
  items,
}: {
  title: string
  subtitle: string
  moreLink: string
  items: any
}) {
  return (
    <div className="rounded-2xl border pb-7">
      {/* Head */}
      <div className="flex justify-between py-4 pr-5 pl-4">
        {/* Title */}
        <div>
          <div>
            <span className="text-[20px] font-bold">{title}</span>
          </div>
          <div className="pt-2 f-14 text-neutral-500">
            <span>{subtitle}</span>
          </div>
        </div>

        {/* More */}
        <div>
          <Link href={moreLink}>
            <Button variant="secondary" className="t-body-2 rounded-md">
              مشاهده همه
              <ChevronLeftIcon className="size-3"/>
            </Button>
          </Link>
        </div>
      </div>

      {/* Products */}
      <Products items={items} border={true}>
        <div className="pr-3"></div>
      </Products>
    </div>
  )
}
