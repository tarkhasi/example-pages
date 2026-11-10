"use client"

import * as React from "react"
import styles from "@/app/digikala/landing/landing.module.css"
import Image from "next/image"
import { ChevronLeftIcon, InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Products from "@/app/digikala/landing/components/products/products"

export default function Express({
  items,
}: Readonly<{
  items: any
}>) {
  return (
    <div className={styles.express}>
      <div className="px-6 pt-5 pb-3">
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
      <div className="pb-5 opacity-25">
        <Products items={items}>
          <div className="pr-6"></div>
        </Products>
      </div>
    </div>
  )
}
