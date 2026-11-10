"use client"

import Image from "next/image"
import * as React from "react"

//@ts-expect-error
export default function AmazingDiscountProduct({ data }) {
  return (
    <div
      key={data?.id}
      className="bg-white"
      style={{ minWidth: "154px", width: "164px" }}
    >
      <Image src={data?.image} alt={data?.name} width="164" height="164" />
      <div className="w-full p-2">
        <div>
          <span>{data?.name}</span>
        </div>
        <div className="flex w-full items-center justify-end gap-2 text-sm">
          <div className="rounded-2xl bg-red-500 px-1 text-white">
            {data?.discount}٪
          </div>
          <div>
            <span className="line-through">{data?.price_with_discount}</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-1 text-[19px] font-bold">
          <span>{data?.price}</span>
          <Image
            src="/img/icons/toman.svg"
            alt="Toman"
            width="14"
            height="14"
          />
        </div>
      </div>
    </div>
  )
}
