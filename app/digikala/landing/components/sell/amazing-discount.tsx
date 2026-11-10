"use client"

import { Button } from "@/components/ui/button"
import styles from "./../../landing.module.css"
import { ChevronLeftIcon } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import { cn } from "@/lib/utils"
import Products from "@/app/digikala/landing/components/products/products"

export default function AmazingDiscount({
  items,
  color,
}: Readonly<{ items: any; color?: string }>) {
  return (
    <div
      className={cn(
        color !== "green" ? styles.discounts : styles.discountsGreen,
        "flex items-stretch gap-2 py-4 pr-4"
      )}
    >
      {/* First */}
      <div className="flex flex-col items-center justify-center bg-transparent px-4">
        <Image
          src="/img/digikala/discount/t-p.svg"
          alt="Icon-Page-1"
          width="64"
          height="56"
          className="mb-2"
        />
        <Image
          src="/img/digikala/discount/d-i.svg"
          alt="Icon-Page-1"
          width="126"
          height="24"
          className="my-6"
        />
        <div className="mb-4 flex items-center f-15">
          <div className="rounded-sm bg-white p-1">۱۵</div>
          <span className="text-white">:</span>
          <div className="rounded-sm bg-white p-1">۴۷</div>
          <span className="text-white">:</span>
          <div className="rounded-sm bg-white p-1">۳۴</div>
        </div>

        <Button variant="outline" className="h-8 rounded-md bg-white f-11">
          <span>مشاهده همه</span>
          <ChevronLeftIcon className="opacity-60" />
        </Button>
      </div>

      {/* Sell Items */}
      <Products items={items} gap={1}/>
    </div>
  )
}
