"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const slides = [
  {
    id: "hero-slider-1",
    src: "/img/digikala/slider/slider-1.webp",
    alt: "Slider One",
    href: "/category/digital",
  },
  {
    id: "hero-slider-2",
    src: "/img/digikala/slider/a9d1ee33a36024fc905c2a1bc45bcb2b812c7595_1793791402.webp",
    alt: "Slider Two",
    href: "/category/mobile",
  },
  {
    id: "hero-slider-3",
    src: "/img/digikala/slider/d4bbfbeae524ae7a476fb8aad62e0594599ea89c_1793787491.webp",
    alt: "Slider Three",
    href: "/category/fashion",
  },
  {
    id: "hero-slider-4",
    src: "/img/digikala/slider/f1e501f318b6c949a994ea53a359076d9714a4cd_1794239631.webp",
    alt: "Slider Four",
    href: "/category/home",
  },
  {
    id: "hero-slider-5",
    src: "/img/digikala/slider/746fd98d7dfbd04a2495ec04dfe431dab7cb4ade_1794033822.webp",
    alt: "Slider Four",
    href: "/category/home",
  },
  {
    id: "hero-slider-6",
    src: "/img/digikala/slider/c23b6d93d10ad9aee5c5290866b9f9dd29917a13_1794132607.webp",
    alt: "Slider Four",
    href: "/category/home",
  },
  {
    id: "hero-slider-7",
    src: "/img/digikala/slider/d187b8f9d41683684e413728daef681581ffbf26_1793178141.webp",
    alt: "Slider Four",
    href: "/category/home",
  },
]

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const startX = useRef(0)
  const isDragging = useRef(false)
  const hasDragged = useRef(false)

  // Auto Play
  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovered])

  // Next Slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  // Previous Slide
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Drag Start
  const handleDragStart = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return

    startX.current = e.clientX
    isDragging.current = true
    hasDragged.current = false

    e.currentTarget.setPointerCapture(e.pointerId)
  }

  // Drag End
  const handleDragEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return

    const diff = startX.current - e.clientX
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      hasDragged.current = true

      if (diff < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    isDragging.current = false
  }

  // Prevent Link Click After Drag
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasDragged.current) {
      e.preventDefault()
      hasDragged.current = false
    }
  }

  return (
    <div
      className="group relative h-[400px] w-full overflow-hidden rounded-lg select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handleDragStart}
      onPointerUp={handleDragEnd}
      onPointerCancel={() => {
        isDragging.current = false
      }}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-full w-full shrink-0">
            <Link
              href={slide.href}
              onClick={handleClick}
              draggable={false}
              className="absolute inset-0 block"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                draggable={false}
                className="pointer-events-none object-cover"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-6 bg-neutral-900"
                : "w-2 bg-neutral-900/40 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-4 bottom-7 z-20 flex translate-y-2 items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <button
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={prevSlide}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            viewBox="0 0 1024 1024"
          >
            <path d="M525 180c-13 12-13 33 0 45l241 244h-563c-18 0-32 15-32 32s14 32 32 32h563l-241 244c-13 13-13 33 0 46 12 12 33 12 45 0l295-299c13-13 13-33 0-45l-295-299c-12-12-33-13-45 0z" />
          </svg>
        </button>

        <button
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={nextSlide}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            viewBox="0 0 1024 1024"
          >
            <path d="M521 180c12 12 12 33 0 45l-242 244h564c17 0 32 15 32 32s-15 32-32 32h-564l242 244c12 13 12 33 0 46-13 12-33 12-46 0l-295-299c-12-13-12-33 0-45l295-299c13-12 33-13 46 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
