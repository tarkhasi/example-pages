"use client"

import { Field } from "@/components/ui/field"

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, } from "@/components/ui/input-group"
import { LogIn, MapPinIcon, MenuIcon, SearchIcon } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import * as React from "react"
import styles from "@/app/digikala/landing/landing.module.css"
import { Button } from "@/components/ui/button"
import Space from "@/components/space"
import Link from "next/link"
import { brands } from "@/app/digikala/_data/footer.data"
import { menu } from "@/app/digikala/_data/header.data"

export default function Header({}) {
  return (
    <header className={"border"}>
      <div className={styles.header + " px-4 pt-1"}>
        <div className="flex items-center justify-between gap-2 py-2">
          {/* Logo & ... */}
          <div className="flex w-full items-center">
            <div>
              <Image
                src="/img/digikala/logo.PNG"
                alt="Logo"
                width={195}
                height={30}
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
                alt="Lorem Ipsum"
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
                alt="Lorem Ipsum"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>

        {/*  Menu */}
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

            {/* Menu loop */}
            {menu.map((i, index) => (
              <Link key={i?.id} href={i?.link} className="group relative px-3">
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
              <div className="flex items-center">
                <span>در دیجی‌کالا بفروشید!</span>
              </div>
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-t-2xl bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full" />
            </Link>
          </div>

          {/* Actions */}
          <div className="pb-1">
            <Button
              variant="secondary"
              className="f-12 cursor-pointer bg-orange-50 text-orange-400"
            >
              <MapPinIcon />
              <span>انتخاب آدرس</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
