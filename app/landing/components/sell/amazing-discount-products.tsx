"use client"

import * as React from "react"
import AmazingDiscountProduct from "@/app/landing/components/sell/amazing-discount-product"

const items = [
  {
    id: "d-p-1",
    image:
      "/img/products/7ecf6e35ca85f787e4a9eab369d05f23813a34b6_1645431975.webp",
    name: "کپسول ب کمپلکس آپوویتال بسته 40 عددی",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-p-2",
    image:
      "/img/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-3",
    image:
      "/img/products/947f8dc8be9d84d53c56582fef7e64fa7c1323f1_1786696299.webp",
    name: "ژل آبرسان تیلسیم مدل هیالورونیک اسید حجم ۵۰..",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-4",
    image:
      "/img/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-5",
    image:
      "/img/products/52cd0a1a4efc75857760e1cce30d114692e4b946_1769210160.webp",
    name: "عینک محافظ  چشم مدل TR31-Anti ...",
    discount: "۷۷",
    price_with_discount: "۳,۰۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-p-6",
    image:
      "/img/products/7ecf6e35ca85f787e4a9eab369d05f23813a34b6_1645431975.webp",
    name: "کپسول ب کمپلکس آپوویتال بسته 40 عددی",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-p-7",
    image:
      "/img/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-8",
    image:
      "/img/products/947f8dc8be9d84d53c56582fef7e64fa7c1323f1_1786696299.webp",
    name: "ژل آبرسان تیلسیم مدل هیالورونیک اسید حجم ۵۰..",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-9",
    image:
      "/img/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-10",
    image:
      "/img/products/52cd0a1a4efc75857760e1cce30d114692e4b946_1769210160.webp",
    name: "عینک محافظ  چشم مدل TR31-Anti ...",
    discount: "۷۷",
    price_with_discount: "۳,۰۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
]

export default function AmazingDiscountProducts({
  children,
}: Readonly<{
  children?: React.ReactNode
}>) {
  const list = items.map((i) => <AmazingDiscountProduct key={i.id} data={i} />)
  return (
    <div className="scrollbar-hide overflow-hidden overflow-x-auto rounded-r-md">
      <div className="flex w-auto items-stretch gap-1">
        {children}
        {list}
        <div className="px-10"></div>
      </div>
    </div>
  )
}
