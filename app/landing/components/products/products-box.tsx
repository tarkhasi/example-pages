"use client"

import * as React from "react"
import Products from "@/app/landing/components/products/products"
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
      <div className="flex justify-between pr-7 pl-6 py-5">
        {/* Title */}
        <div>
          <div>
            <span className="text-[20px] font-bold">{title}</span>
          </div>
          <div>
            <span>{subtitle}</span>
          </div>
        </div>

        {/* More */}
        <div>
          <Link href={moreLink}>
            <Button variant="secondary" className="rounded-md">
              مشاهده همه
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>
      </div>

      {/* Products */}
      <Products items={items} border={true}>
        <div className="pr-5"></div>
      </Products>
    </div>
  )
}
