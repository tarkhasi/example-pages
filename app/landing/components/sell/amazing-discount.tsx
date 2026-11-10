"use client"

import { Button } from "@/components/ui/button"
import styles from "./../../landing.module.css"
import { ChevronLeftIcon } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import AmazingDiscountProducts from "@/app/landing/components/sell/amazing-discount-products"

export default function AmazingDiscount({ color }: { color?: string }) {
  return (
    <div
      className={
        (color !== "green" ? styles.discounts : styles.discountsGreen) +
        " flex items-stretch py-4 pr-4"
      }
    >
      {/* First */}
      <div className="flex flex-col items-center justify-center bg-transparent px-4">
        <Image
          src="/img/discount/t-p.svg"
          alt="Icon-Page-1"
          width="64"
          height="56"
          className="mb-2"
        />
        <Image
          src="/img/discount/d-i.svg"
          alt="Icon-Page-1"
          width="126"
          height="24"
          className="my-6"
        />
        <div className="mb-4 flex items-center">
          <div className="rounded-sm bg-white p-1">۱۵</div>
          <span className="text-white">:</span>
          <div className="rounded-sm bg-white p-1">۴۷</div>
          <span className="text-white">:</span>
          <div className="rounded-sm bg-white p-1">۳۴</div>
        </div>

        <Button variant="outline" className="rounded-md bg-white">
          <span>مشاهده همه</span>
          <span>&nbsp;</span>
          <ChevronLeftIcon />
        </Button>
      </div>

      {/* Sell Items */}
      <AmazingDiscountProducts />
    </div>
  )
}
