"use client"

import Image from "next/image"
import * as React from "react"
import Link from "next/link"
import { cn, toPersianNumber } from "@/lib/utils"
import { StarIcon } from "lucide-react"

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
    <Link
      href={data?.link ?? "#"}
      className={
        "flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-white" +
        (border ? " rounded-lg border" : "")
      }
    >
      {/* Special Offer */}
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
          className={cn(
            "line-clamp-2",
            !grid
              ? "f-14 text-neutral-600"
              : "mt-5 f-12 font-bold text-neutral-800"
          )}
          title={data?.name}
        >
          <span>{data?.name}</span>
        </div>

        {grid && (
          <div className="mb-4 flex justify-between pt-2">
            <div>
              {data?.stock < 5 && (
                <div className="f-11 text-destructive">
                  <span>
                    تنها {toPersianNumber(data?.stock)} عدد در انبار باقی مانده
                  </span>
                </div>
              )}
            </div>
            {/* Rate */}

            <div>
              {data?.rating && (
                <div className="flex items-center">
                  <div className="t-body-2 px-2 font-bold">
                    {toPersianNumber(data?.rating)}
                  </div>
                  <StarIcon className="size-4 fill-yellow-400 text-transparent" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Discount  */}
        {!grid && (
          <div>
            <div className="flex w-full items-center justify-end gap-2 pt-4 text-sm f-12">
              {data?.discount && (
                <div className="rounded-2xl bg-[#d32f2f] px-1 text-white">
                  {data?.discount}٪
                </div>
              )}

              <div>
                <span className="text-neutral-300 line-through">
                  {data?.price_with_discount}&nbsp;
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Price  */}
        <div className="flex w-full items-center justify-between">
          <div>
            {grid && data?.discount && (
              <div className="rounded-2xl bg-[#d32f2f] px-1 f-12 text-white">
                {data?.discount}٪
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between gap-1 f-19 font-bold">
              <span>{data?.price}</span>
              <Image
                src="/img/digikala/icons/toman.svg"
                alt="Toman"
                width="14"
                height="14"
              />
            </div>
            <div>
              {grid && (
                <span className="text-neutral-300 line-through">
                  {data?.price_with_discount}&nbsp;
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
