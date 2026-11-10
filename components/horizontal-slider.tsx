"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type HorizontalSliderProps = {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  scrollAmount?: number
  showArrows?: boolean
  hideScrollbar?: boolean
  dir?: "rtl" | "ltr"
  arrowPosition?: "inside" | "outside"
  arrowSize?: "sm" | "md" | "lg"
}

export default function HorizontalSlider({
  children,
  className,
  contentClassName,
  scrollAmount = 0.7,
  showArrows = true,
  hideScrollbar = true,
  dir = "rtl",
  arrowPosition = "inside",
  arrowSize = "md",
}: HorizontalSliderProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth
    const position = Math.abs(el.scrollLeft)

    if (dir === "rtl") {
      setCanScrollPrev(el.scrollLeft < -1)
      setCanScrollNext(position < maxScroll - 1)
    } else {
      setCanScrollPrev(el.scrollLeft > 1)
      setCanScrollNext(el.scrollLeft < maxScroll - 1)
    }
  }, [dir])

  React.useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    checkScroll()

    el.addEventListener("scroll", checkScroll, { passive: true })

    const resizeObserver = new ResizeObserver(checkScroll)
    resizeObserver.observe(el)

    if (el.firstElementChild) {
      resizeObserver.observe(el.firstElementChild)
    }

    const mutationObserver = new MutationObserver(checkScroll)
    mutationObserver.observe(el, {
      childList: true,
      subtree: true,
    })

    return () => {
      el.removeEventListener("scroll", checkScroll)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [checkScroll, children])

  const handleScroll = (direction: "prev" | "next") => {
    const el = scrollRef.current
    if (!el) return

    const amount = el.clientWidth * scrollAmount

    el.scrollBy({
      left:
        (dir === "rtl" ? -1 : 1) * (direction === "next" ? amount : -amount),
      behavior: "smooth",
    })
  }

  const buttonSize = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
  }[arrowSize]

  return (
    <div
      className={cn(
        "relative min-w-0",
        arrowPosition === "outside" && "px-12",
        className
      )}
      dir={dir}
    >
      <div
        ref={scrollRef}
        className={cn(
          "w-full min-w-0 overflow-x-auto overflow-y-hidden",
          hideScrollbar && "scrollbar-hide",
          contentClassName
        )}
      >
        {children}
      </div>

      {showArrows && canScrollPrev && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => handleScroll("prev")}
          aria-label="موارد قبلی"
          className={cn(
            "absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100",
            buttonSize,
            arrowPosition === "inside" ? "right-2" : "right-0"
          )}
        >
          <ChevronRightIcon className="size-5" />
        </Button>
      )}

      {showArrows && canScrollNext && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => handleScroll("next")}
          aria-label="موارد بعدی"
          className={cn(
            "absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100",
            buttonSize,
            arrowPosition === "inside" ? "left-2" : "left-0"
          )}
        >
          <ChevronLeftIcon className="size-5" />
        </Button>
      )}
    </div>
  )
}
