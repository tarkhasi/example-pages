"use client"

import { Button } from "@/components/ui/button"
import styles from "./../../landing.module.css"
import { ChevronLeftIcon } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import { cn } from "@/lib/utils"
import Products from "@/app/digikala/landing/components/products/products"
import Box from "@/components/box"

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

  const productsRef = React.useRef<HTMLDivElement>(null)

  const handleNext = () => {
    const container = productsRef.current
    if (!container) return

    container.scrollBy({
      left: -container.clientWidth * 0.7,
      behavior: "smooth",
    })
  }

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

      {/* Sell Items */}
      <div className="relative min-w-0 flex-1">
        <Products items={items} gap={1} scrollRef={productsRef} />

        {/* Next Button */}
        <Button
          type="button"
          onClick={handleNext}
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100"
          aria-label="محصولات بعدی"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
