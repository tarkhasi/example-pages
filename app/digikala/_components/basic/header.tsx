"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Space from "@/components/space"

import { LogIn, MapPinIcon, MenuIcon, SearchIcon } from "lucide-react"

import styles from "@/app/digikala/landing/landing.module.css"
import { menu } from "@/app/digikala/_data/header.data"

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(true)


  React.useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    let accumulatedScroll = 0
    let rafId = 0

    const THRESHOLD = 100
    const TOP_LIMIT = 50

    const handleScroll = () => {
      if (ticking) return

      ticking = true

      rafId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const difference = currentScrollY - lastScrollY

        if (currentScrollY <= TOP_LIMIT) {
          setIsMenuVisible(true)
          accumulatedScroll = 0
        } else {
          accumulatedScroll =
            difference > 0
              ? Math.max(0, accumulatedScroll + difference)
              : Math.min(0, accumulatedScroll + difference)

          if (accumulatedScroll >= 100) {
            setIsMenuVisible(false)
            accumulatedScroll = 0
          } else if (accumulatedScroll <= -100) {
            setIsMenuVisible(true)
            accumulatedScroll = 0
          }
        }

        lastScrollY = currentScrollY
        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className={styles.header + " px-4 pt-1"}>
        {/* Main Header */}
        <div className="flex items-center justify-between gap-2 py-2 pb-3">
          {/* Logo & Search */}
          <div className="flex w-full items-center">
            <div>
              <Image
                src="/img/digikala/logo.PNG"
                alt="Logo"
                width={195}
                height={30}
                priority
              />
            </div>

            <div className={styles.search}>
              <Field className="mr-2 h-[42px]">
                <InputGroup className="group h-[42px] items-center border-0 bg-neutral-200 opacity-80">
                  <InputGroupInput
                    className="mr-2 h-[20px] py-0 leading-normal placeholder:text-[12px] placeholder:font-bold placeholder:opacity-60"
                    id="input-group-url"
                    placeholder="جستجو"
                  />

                  <div className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <kbd className="rounded bg-neutral-50 px-2 py-1 text-[11px] font-medium text-primary">
                      Ctrl+K
                    </kbd>
                  </div>

                  <InputGroupAddon className="h-1 pr-5">
                    <InputGroupText>
                      <SearchIcon className="size-5" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center">
            <Button variant="link" size="icon">
              <Image
                src="/img/digikala/icons/bell.svg"
                alt="Notification"
                width={24}
                height={24}
              />
            </Button>

            <Space width={17} />

            <Button
              className="rounded-md bg-background px-4 py-5 text-[12px] font-bold"
              variant="outline"
            >
              <LogIn />
              ورود | ثبت‌نام
            </Button>

            <Separator
              orientation="vertical"
              className="mt-1 mr-3 ml-4 data-vertical:h-6 data-vertical:self-auto"
            />

            <Button variant="link" size="icon">
              <Image
                src="/img/digikala/icons/cart.svg"
                alt="Cart"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`overflow-hidden transition-[max-height,opacity,transform] duration-400 ease-in-out ${
            isMenuVisible
              ? "max-h-16 translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0"
          } `}
          style={{
            willChange: "max-height, opacity, transform",
          }}
        >
          <div className="flex justify-between pt-1">
            {/* Menu Items */}
            <div className="text-body-2 flex items-center text-neutral-600">
              <Link href="#" className="group relative">
                <div className="text-body1-strong flex items-center pl-4 text-[14px] font-bold text-foreground">
                  <MenuIcon size={20} />
                  <span>&nbsp;</span>
                  <span>دسته‌بندی کالاها</span>
                </div>

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-t-2xl bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full" />
              </Link>

              <Separator
                orientation="vertical"
                className="data-vertical:h-4 data-vertical:self-auto"
              />

              {menu.map((i) => (
                <Link
                  key={i?.id}
                  href={i?.link}
                  className="group t-body-2 relative px-3"
                >
                  <div className="flex items-center">
                    <Image
                      src={i?.image}
                      alt={i?.alt}
                      className="opacity-40"
                      width={18}
                      height={18}
                    />

                    <span className="pr-1">{i?.name}</span>
                  </div>

                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-t-2xl bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                </Link>
              ))}

              <Separator
                orientation="vertical"
                className="data-vertical:h-4 data-vertical:self-auto"
              />

              <Link href="#" className="group relative px-3">
                <div className="t-body-2 flex items-center">
                  <span>در دیجی‌کالا بفروشید!</span>
                </div>

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-t-2xl bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full" />
              </Link>
            </div>

            {/* Address Action */}
            <div className="pb-1">
              <Button
                variant="secondary"
                className="cursor-pointer bg-orange-50 f-12 text-orange-400"
              >
                <MapPinIcon />
                <span>انتخاب آدرس</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
