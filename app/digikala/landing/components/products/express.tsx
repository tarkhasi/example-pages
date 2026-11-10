"use client"

import * as React from "react"
import styles from "@/app/digikala/landing/landing.module.css"
import Image from "next/image"
import { ChevronLeftIcon, InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Products from "@/app/digikala/landing/components/products/products"
import HorizontalSlider from "@/components/horizontal-slider"
import { cn } from "@/lib/utils"

export default function Express({
  items,
}: Readonly<{
  items: any
}>) {
  return (
    <div className={cn(styles.express, "pb-5")}>
      <div className="pb-3 px-6 pt-5">
        {/* Express Header */}
        <div className="flex items-center gap-2 pb-2">
          <div>
            <Image
              src="/img/digikala/discount/express.webp"
              alt="Card 4"
              width={82}
              height={24}
            />
          </div>
          <div className="text-[20px] font-bold">
            <span>تحویل بگیر!</span>
          </div>
        </div>
        {/* Express message */}
        <div className="flex items-center gap-2 rounded-md bg-orange-100 p-3 pl-0 text-[14px] font-bold">
          <InfoIcon size={17} className="text-orange-400" />
          <div className="w-full">
            <span>برای بررسی امکان ارسال، آدرس را انتخاب کنید.</span>
          </div>

          <Button variant="link" className="text-orange-500">
            <div>انتخاب آدرس</div>
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>

      {/* Express Products */}
      <div className="pointer-events-none flex-1 opacity-50">
        <HorizontalSlider
          className="flex-1 overflow-hidden rounded-r-xl"
          dir="rtl"
          scrollAmount={0.7}
        >
          <Products items={items} gap={1} className="shrink-0 pr-6" />
        </HorizontalSlider>
      </div>
    </div>
  )
}
