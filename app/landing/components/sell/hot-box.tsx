"use client"

import * as React from "react"
import { FlameIcon } from "lucide-react"
import Image from "next/image"

export function HotBox({ items, title }: { items: any, title:string }) {



  return (
    <div className="rounded-2xl border pb-7">
      {/* Title */}
      <div className="flex justify-between py-5 pr-7 pl-6">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/img/icons/hot.svg"
              alt="Hot icon"
              width={20}
              height={20}
            />

            <span className="text-[20px] font-bold">{title}</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="scrollbar-hide w-full overflow-x-auto pr-6">
        <div className="grid w-max auto-cols-[301px] grid-flow-col grid-rows-3 gap-3">
          {items.map((i: any, index: number) => (
            <div
              key={i?.id}
              className="flex h-[100px] w-[301px] items-center justify-center rounded-lg"
            >
              <Image
                src={i?.image}
                alt={i?.name}
                width={88}
                height={88}
                className="object-contain"
              />

              <div className="pr-3">
                <span className="inline-flex h-5.5 w-5.5 items-center justify-center rounded-full bg-red-500 align-middle text-white">
                  {index + 1}
                </span>
                <span>&nbsp;&nbsp;{i?.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
