"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"
import Brands from "@/app/digikala/landing/components/brands/brands"

export function BrandsBox({
  title,
  moreLink,
  items,
}: {
  title: string
  moreLink: string
  items: any
}) {
  return (
    <div className="rounded-2xl border pb-7">
      {/* Head */}
      <div className="flex justify-between py-5 pr-7 pl-6">
        {/* Title */}
        <div>
          <div className="flex items-center gap-2">
            <SparklesIcon size="20" />
            <span className="text-[20px] font-bold">{title}</span>
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
      <Brands items={items}>
        <div className="pr-5"></div>
      </Brands>
    </div>
  )
}
