"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EllipsisIcon } from "lucide-react"

const items = [
  {
    id: "c-p-1",
    image:
      "/img/digikala/categories/09a98a13c782e12a245930b4515d243b17734a33_1740821989.webp",
    name: "موبایل",
  },
  {
    id: "c-p-2",
    image:
      "/img/digikala/categories/7cf1fed6dac6bdfd1b888db6bf8f443ea680244b_1748692252.webp",
    name: "لپ تاپ",
  },
  {
    id: "c-p-3",
    image:
      "/img/digikala/categories/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740821986.webp",
    name: "کالای دیجیتال",
  },
  {
    id: "c-p-4",
    image:
      "/img/digikala/categories/8a042388b93c5116604f35092a1fb35f8f0756be_1740821985.webp",
    name: "خانه و آشپزخانه",
  },
  {
    id: "c-p-5",
    image:
      "/img/digikala/categories/d825f64f509cd5067a9022528c465e8ca705f60d_1740821988.webp",
    name: "لوازم خانگی برقی",
  },
  {
    id: "c-p-6",
    image:
      "/img/digikala/categories/b196bbdea97f57bfac02dc1666d7401b16ee4bcb_1740821984.webp",
    name: "آرایشی بهداشتی",
  },
  {
    id: "c-p-7",
    image:
      "/img/digikala/categories/b3d4eaefebe67ab8d849296ea2e7e113cde8094c_1740821988.webp",
    name: "مد و پوشاک",
  },
  {
    id: "c-p-8",
    image:
      "/img/digikala/categories/78135af4274ad7b7fcdaec7e5912689e5f5db96a_1740821985.webp",
    name: "طلا و نقره",
  },
  {
    id: "c-p-9",
    image:
      "/img/digikala/categories/03552aa1293fec9f43477814ca62afdacdac18e3_1740821990.webp",
    name: "خودرو و موتور",
  },

  {
    id: "c-p-10",
    image:
      "/img/digikala/categories/fb6303218362cd2c48b40fef5da89ad33a5c04d7_1740821984.webp",
    name: "ابزارآلات",
  },
  {
    id: "c-p-11",
    image:
      "/img/digikala/categories/deb3f514c62761797eb6a49e1559268b8bce3219_1740821984.webp",
    name: "پزشکی و سلامت",
  },
  {
    id: "c-p-12",
    image:
      "/img/digikala/categories/0cdf9c404e509371c3177a334be948a7e500419c_1740821987.webp",
    name: "شهر کتاب و هنر",
  },
  {
    id: "c-p-13",
    image:
      "/img/digikala/categories/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740821990.webp",
    name: "ورزش و سفر",
  },
  {
    id: "c-p-14",
    image:
      "/img/digikala/categories/f35b3eba7de8bf2432fff4f53abfa8cbaa6e71d6_1740821985.webp",
    name: "کارت هدیه",
  },
  {
    id: "c-p-15",
    image:
      "/img/digikala/categories/7adb0cc6edc18a6d04b9ba3bdd424b1bcce47848_1740821986.webp",
    name: "سوپرمارکتی",
  },
  {
    id: "c-p-16",
    image:
      "/img/digikala/categories/6f5284dccdb280616bbfe58533ecc483de4639af_1740821987.webp",
    name: "اسباب‌بازی و کودک",
  },
  {
    id: "c-p-17",
    image:
      "/img/digikala/categories/9a4dfac524f8a865f9f69e38d5434fa69fe63e3b_1740821990.webp",
    name: "بومی و محلی",
  },
  {
    id: "c-p-18",
    image:
      "/img/digikala/categories/6f236efd9caae4d1c3177f37c483aa44c3092b6a_1753614680.webp",
    name: "پت شاپ",
  },
]

export default function Categories() {
  const list = items.map((i) => (
    <div key={i.id} className="text-center">
      <div>
        <Image
          src={i.image}
          alt={i.name}
          width="100"
          height="100"
          className="mx-auto mb-2"
        />
      </div>
      <div>{i.name}</div>
    </div>
  ))

  return <div className={"grid grid-cols-9 gap-4"}>{list}</div>
}
