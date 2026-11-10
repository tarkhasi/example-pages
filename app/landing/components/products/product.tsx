"use client"

import Image from "next/image"
import * as React from "react"

//@ts-expect-error
export default function Product({
  data,
  border = false,
  grid = false,
  imageSize = null,
}: {
  data: any
  border?: boolean
  grid?: boolean
  imageSize?: number
}) {
  return (
    <div
      key={data?.id}
      className={
        "flex w-full flex-col items-center justify-center overflow-hidden  bg-white" +
        (border ? " rounded-lg border" : "")
      }
    >
      {grid && (
        <div className="flex w-full items-start p-2 pt-4 h-[40px]  ">
          { data?.special_offer && (
              <Image
                src="/img/icons/special-sell.svg"
                alt="Special Offer"
                width={64}
                height={14}
              />
          )}
        </div>
      )}
      <Image
        src={data?.image}
        alt={data?.name}
        width={imageSize ?? 164}
        height={imageSize ?? 164}
      />
      <div className="w-full p-2">
        <div>
          <span>{data?.name}</span>
        </div>
        <div className="flex w-full items-center justify-end gap-2 text-sm">
          {data?.discount && (
            <div className="rounded-2xl bg-red-500 px-1 text-white">
              {data?.discount}%
            </div>
          )}
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
