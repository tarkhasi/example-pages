"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"
import Brands from "@/app/digikala/landing/components/brands/brands"
import HorizontalSlider from "@/components/horizontal-slider"

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
      </div>

      {/* Products */}
      <HorizontalSlider dir="rtl" scrollAmount={0.7} arrowSize="md">
        <Brands items={items} className="pr-6"/>
      </HorizontalSlider>
    </div>
  )
}
