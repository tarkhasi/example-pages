"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Field } from "@/components/ui/field"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import Box from "@/components/box"
import { brands } from "@/app/digikala/_data/footer.data"
import { cn } from "@/lib/utils"

export default function Footer({}) {
  return (
    <footer className={"m-0 border-t pt-6"}>
      <div className="px-5">
        {/* Logo Raw */}
        <div className="flex items-center justify-between gap-2">
          {/* First */}
          <div>
            <Image
              src="/img/digikala/logo.PNG"
              alt="Lorem Ipsum"
              width={195}
              height={30}
            />

            <div className="mt-4 flex items-center gap-4 text-[12px] text-neutral-700">
              <div>
                <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
              </div>
              <Separator
                orientation="vertical"
                className="mt-1 mr-2 data-vertical:h-6 data-vertical:self-auto"
              />
              <div>
                <span>۰۲۱-۹۱۰۰۰۱۰۰</span>
              </div>
              <Separator
                orientation="vertical"
                className="mt-1 mr-2 data-vertical:h-6 data-vertical:self-auto"
              />
              <div>
                <span> ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex">
            <Button
              className="rounded-md bg-transparent py-5 text-mauve-400"
              variant="outline"
            >
              <span>بازگشت به بالا</span>
              <ChevronUpIcon />
            </Button>
          </div>
        </div>
        {/*  Features */}
        <div className="my-8 grid grid-cols-5 text-center">
          <div className="flex flex-col items-center justify-center justify-items-center">
            <Image
              src="/img/digikala/icons/express-delivery.svg"
              alt="Lorem Ipsum"
              width={56}
              height={56}
            />
            <div>
              <span className="text-[11px] opacity-70">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center justify-items-center">
            <Image
              src="/img/digikala/icons/cash-on-delivery.svg"
              alt="Lorem Ipsum"
              width={56}
              height={56}
            />
            <div>
              <span className="text-[11px] opacity-70">
                امکان پرداخت در محل
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center justify-items-center">
            <Image
              src="/img/digikala/icons/support.svg"
              alt="Lorem Ipsum"
              width={56}
              height={56}
            />
            <div>
              <span className="text-[11px] opacity-70">
                ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center justify-items-center">
            <Image
              src="/img/digikala/icons/days-return.svg"
              alt="Lorem Ipsum"
              width={56}
              height={56}
            />
            <div>
              <span className="text-[11px] opacity-70">
                هفت روز ضمانت بازگشت کالا
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center justify-items-center">
            <Image
              src="/img/digikala/icons/original-products.svg"
              alt="Lorem Ipsum"
              width={56}
              height={56}
            />
            <div>
              <span className="text-[11px] opacity-70">
                ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
              </span>
            </div>
          </div>
        </div>
        {/*  Links Columns */}
        <div className="grid grid-cols-4 py-4">
          {/* Column 1 */}
          <div>
            <div>
              <div className="mb-3 font-bold text-neutral-700">
                <span>با دیجی‌کالا</span>
              </div>
              <ul className="text-body-1 text-[14px] text-neutral-500">
                <li className="mb-4">
                  <Link href="#">
                    <span>اتاق خبر دیجی‌کالا</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>فروش در دیجی‌کالا</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>فرصت‌های شغلی</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>گزارش تخلف در دیجی‌کالا</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>تماس با دیجی‌کالا</span>
                  </Link>
                </li>
                <li className="">
                  <Link href="#">
                    <span>درباره دیجی‌کالا</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 2 */}
          <div>
            <div>
              <div className="mb-3 font-bold text-neutral-700">
                <span>خدمات مشتریان</span>
              </div>
              <ul className="text-body-1 text-[14px] text-neutral-500">
                <li className="mb-4">
                  <Link href="#">
                    <span>پاسخ به پرسش‌های متداول</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>رویه‌های بازگرداندن کالا</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>شرایط استفاده</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>حریم خصوصی</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>گزارش باگ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 3 */}
          <div>
            <div>
              <div className="mb-3 font-bold text-neutral-700">
                <span>راهنمای خرید از دیجی‌کالا</span>
              </div>
              <ul className="text-body-1 text-[14px] text-neutral-500">
                <li className="mb-4">
                  <Link href="#">
                    <span>نحوه ثبت سفارش</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>رویه ارسال سفارش</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <span>شیوه‌های پرداخت</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 4 */}
          <div>
            {/* Social Media */}
            <div>
              <div className="mb-3 font-bold text-neutral-700">
                <span>همراه ما باشید!</span>
              </div>
              <div className="flex w-full flex-row-reverse items-center justify-between opacity-30">
                <Link href="#">
                  <Image
                    src="/img/digikala/icons/baleh.svg"
                    alt="Lorem Ipsum"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/img/digikala/icons/aparat.svg"
                    alt="Lorem Ipsum"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/img/digikala/icons/linkedin.svg"
                    alt="Lorem Ipsum"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/img/digikala/icons/x.svg"
                    alt="Lorem Ipsum"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/img/digikala/icons/instagram.svg"
                    alt="Lorem Ipsum"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>

            {/* Subscribe */}
            <div className="mt-11">
              <div className="mb-3 font-bold text-neutral-700">
                <span>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</span>
              </div>

              <div className="flex gap-2 py-4">
                <Field>
                  <InputGroup className="h-12 rounded-lg p-3">
                    <InputGroupInput
                      id="input-group-url"
                      placeholder="ایمیل شما"
                    />
                  </InputGroup>
                </Field>

                <Button
                  variant="secondary"
                  className="h-12 rounded-lg bg-neutral-200 px-5"
                >
                  <span className="text-white">ثبت</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Download App */}
        <div
          className="mb-7 flex items-center justify-between rounded-lg p-5"
          style={{ background: "#3c4b6d" }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/img/digikala/icons/footerlogo2.webp"
              alt="Lorem Ipsum"
              width={40}
              height={40}
            />
            <span className="text-[21px] font-bold text-background">
              دانلود اپلیکیشن دیجی‌کالا
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#">
              <Image
                src="/img/digikala/icons/coffe-bazzar.svg"
                alt="Lorem Ipsum"
                width={142}
                height={44}
              />
            </Link>
            <Link href="#">
              <Image
                src="/img/digikala/icons/myket.svg"
                alt="Lorem Ipsum"
                width={142}
                height={44}
              />
            </Link>
            <Link href="#">
              <Image
                src="/img/digikala/icons/sib-app.svg"
                alt="Lorem Ipsum"
                width={142}
                height={44}
              />
            </Link>
            <Link href="#">
              <Box
                className="mr-2 rounded-sm bg-background"
                width={42}
                height={42}
              >
                <Image
                  src="/img/digikala/icons/More.svg"
                  alt="Lorem Ipsum"
                  width={42}
                  height={44}
                />
              </Box>
            </Link>
          </div>
        </div>
        {/* Licence */}
        <div className="flex justify-between gap-6 border-t py-8">
          {/* First  */}
          <div className="w-8/12">
            <div>
              <h1 className="text-[21px] font-bold text-neutral-600">
                <span> دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران</span>
              </h1>
            </div>
            <div className="relative py-2 leading-6.5">
              <p className="line-clamp-3 text-[13px] text-neutral-500">
                <span>
                  دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران
                  اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و
                  معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز
                  محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا
                  را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر،
                  ارسال سریع، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد
                  جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با
                  سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای
                  خرید آنلاین در ایران محسوب می‌شود. این روزها بازار دیجی کالا
                  حتی فرصت خرید آسان از فروشگاه های اینستاگرامی را در اختیار شما
                  قرار داده است و اگر هم خرید حضوری را ترجیح می‌دهید فروشگاه
                  حضوری دیجی کالا هر روز بر تعداد شعب خود می‌افزاید.
                </span>
              </p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-gradient-to-b from-transparent via-white/70 to-white" />
            </div>
            <div>
              <div className="flex cursor-pointer items-center text-[12px] font-bold text-blue-500">
                <span>مشاهده بیشتر</span>&nbsp;
                <ChevronLeftIcon size={15} />
              </div>
            </div>
          </div>

          {/* End Actions */}
          <div className="flex h-28 items-stretch justify-center justify-items-center gap-2">
            <Link
              className="flex items-center items-stretch rounded-lg border p-4"
              href="#"
            >
              <Image
                src="/img/digikala/icons/sapra.webp"
                alt="Lorem Ipsum"
                width={75}
                height={75}
                className="h-18.75 object-contain"
              />
            </Link>
            <Link className="flex items-center rounded-lg border p-4" href="#">
              <Image
                src="/img/digikala/icons/rezi.webp"
                alt="Lorem Ipsum"
                width={75}
                height={75}
                className="h-18.75 object-contain"
              />
            </Link>
            <Link className="flex items-center rounded-lg border p-4" href="#">
              <Image
                src="/img/digikala/icons/kasbokar.webp"
                alt="Lorem Ipsum"
                width={75}
                height={75}
                className="h-18.75 object-contain"
              />
            </Link>
            <Link className="flex items-center rounded-lg border p-4" href="#">
              <Image
                src="/img/digikala/icons/logo.png"
                alt="Lorem Ipsum"
                width={75}
                height={75}
                className="h-18.75 object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="border-t py-8 text-center text-[11px] text-neutral-500">
          <span>
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </span>
        </div>
      </div>

      <div className="relative w-full bg-neutral-100 lg:z-3">
        <div className="grid grid-cols-9 grid-rows-2">
          {brands.map((i, index) => (
            <Link
              key={i.id}
              className={cn(
                "flex h-20 grow flex-col items-center justify-center px-5",
                0 < index && index != 9 ? "border-r" : "",
                0 <= index && index < 9 ? "border-b" : ""
              )}
              href="#"
            >
              <Image
                src={i.image}
                alt={i.name}
                width={i.width ?? 124}
                height={i.height ?? 20}
                className="object-contain h-5"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
