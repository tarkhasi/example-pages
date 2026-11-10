"use client"

import Image from "next/image"
import * as React from "react"
import Link from "next/link"

export default function Product({
  data,
  border = false,
  grid = false,
  imageSize = null,
}: {
  data: any
  border?: boolean
  grid?: boolean
  imageSize?: number | null
}) {
  return (
    <Link href={data?.link ?? "#"}>
      <div
        key={data?.id}
        className={
          "flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-white" +
          (border ? " rounded-lg border" : "")
        }
      >
        {grid && (
          <div className="flex h-10 w-full items-start p-2 pt-4">
            {data?.special_offer && (
              <Image
                src="/img/digikala/icons/special-sell.svg"
                alt="Special Offer"
                width={64}
                height={14}
              />
            )}
          </div>
        )}
        {/* Image */}
        <Image
          src={data?.image}
          alt={data?.name}
          width={imageSize ?? 164}
          height={imageSize ?? 164}
        />

        {/* Name */}
        <div className="w-full p-2">
          <div
            className="line-clamp-2 f-14 text-neutral-600"
            title={data?.name}
          >
            <span>{data?.name}</span>
          </div>

          {/* Discount and Price */}
          <div className="flex w-full items-center justify-end gap-2 pt-4 text-sm f-12">
            <div className="rounded-2xl bg-[#d32f2f] px-1 text-white">
              {data?.discount}٪
            </div>
            <div>
              <span className="text-neutral-300 line-through">
                {data?.price_with_discount}
              </span>
            </div>
          </div>

          <div className="flex w-full items-center justify-end gap-1 f-19 font-bold">
            <span>{data?.price}</span>
            <Image
              src="/img/digikala/icons/toman.svg"
              alt="Toman"
              width="14"
              height="14"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
