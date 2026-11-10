"use client"

import { Button } from "@/components/ui/button"
import styles from "./../../landing.module.css"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import { cn } from "@/lib/utils"
import Products from "@/app/digikala/landing/components/products/products"
import Box from "@/components/box"
import HorizontalSlider from "@/components/horizontal-slider"

const DEFAULT_DURATION = 15 * 3600 + 47 * 60 + 34

function useCountdown(initialSeconds: number) {
  const [remaining, setRemaining] = React.useState(initialSeconds)

  React.useEffect(() => {
    const endTime = Date.now() + initialSeconds * 1000

    const interval = setInterval(() => {
      const secondsLeft = Math.max(0, Math.ceil((endTime - Date.now()) / 1000))

      setRemaining(secondsLeft)

      if (secondsLeft === 0) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [initialSeconds])

  const format = (value: number) =>
    value.toLocaleString("fa-IR", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })

  return {
    hours: format(Math.floor(remaining / 3600)),
    minutes: format(Math.floor((remaining % 3600) / 60)),
    seconds: format(remaining % 60),
    remaining,
  }
}

export default function AmazingDiscount({
  items,
  color,
  durationSeconds = DEFAULT_DURATION,
}: Readonly<{
  items: any
  color?: string
  durationSeconds?: number
}>) {
  const timer = useCountdown(durationSeconds)

  return (
    <div
      className={cn(
        color !== "green" ? styles.discounts : styles.discountsGreen,
        "relative flex items-stretch gap-2 py-4 pr-4"
      )}
    >
      {/* First */}
      <div className="flex shrink-0 flex-col items-center justify-center bg-transparent px-4">
        <Image
          src="/img/digikala/discount/t-p.svg"
          alt="Icon-Page-1"
          width={64}
          height={56}
          className="mb-2"
        />

        <Image
          src="/img/digikala/discount/d-i.svg"
          alt="Icon-Page-1"
          width={126}
          height={24}
          className="my-6"
        />

        {/* Countdown */}
        <div className="mb-4 flex items-center gap-1 f-15" dir="ltr">
          <Box width={27} className="rounded-sm bg-white p-1 text-center">
            {timer.hours}
          </Box>

          <span className="text-white">:</span>

          <Box width={27} className="rounded-sm bg-white p-1 text-center">
            {timer.minutes}
          </Box>

          <span className="text-white">:</span>

          <Box width={27} className="rounded-sm bg-white p-1 text-center">
            {timer.seconds}
          </Box>
        </div>

        <Button variant="outline" className="h-8 rounded-md bg-white f-11">
          <span>مشاهده همه</span>
          <ChevronLeftIcon className="opacity-60" />
        </Button>
      </div>

      {/* Products */}
      <HorizontalSlider className="flex-1 rounded-r-xl overflow-hidden" dir="rtl" scrollAmount={0.7}>
        <Products items={items} gap={1} />
      </HorizontalSlider>
    </div>
  )
}
