import { Button } from "@/components/ui/button"
import styles from "./landing.module.css"

import { Field } from "@/components/ui/field"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  BellIcon,
  ChevronLeftIcon,
  InfoIcon,
  LogIn,
  MapPinIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import * as React from "react"
import AmazingDiscount from "@/app/landing/components/sell/amazing-discount"
import Services from "@/app/landing/components/services/services"
import AmazingDiscountProducts from "@/app/landing/components/sell/amazing-discount-products"
import Categories from "@/app/landing/components/categories/categories"
import ProductsBox from "@/app/landing/components/products/products-box"
import {
  brands,
  products,
  productsCarItems,
  productsHeadset,
  productsMobileItems,
  productsMobiles,
  productsSkin,
} from "@/app/landing/items.data"
import { BrandsBox } from "@/app/landing/components/brands/brands-box"
import { HotBox } from "@/app/landing/components/sell/hot-box"
import Products from "@/app/landing/components/products/products"

export default function Page() {
  return (
    <div>
      {/* Header */}
      <header className={"border"}>
        <div className={styles.header + " px-4"}>
          <div className="flex items-center justify-between gap-2 py-2">
            {/* Logo & ... */}
            <div className="flex w-full">
              <Image src="/img/logo.PNG" alt="Logo" width={195} height={30} />

              <div className={styles.search}>
                <Field>
                  <InputGroup>
                    <InputGroupInput id="input-group-url" placeholder="جستجو" />
                    <InputGroupAddon>
                      <InputGroupText>
                        <SearchIcon />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </div>
            </div>

            {/* Actions */}
            <div className="flex">
              <Button variant="link" size="icon">
                <BellIcon />
              </Button>

              <Button className="rounded-sm" variant="outline">
                <LogIn />
                ورود | ثبت نام
              </Button>

              <Separator
                orientation="vertical"
                className="mt-1 mr-2 data-vertical:h-6 data-vertical:self-auto"
              />

              <Button variant="link" size="icon">
                <ShoppingCartIcon />
              </Button>
            </div>
          </div>

          {/*  Menu */}
          <div className="flex justify-between py-2">
            {/* Menu Items */}
            <div className="flex items-center gap-4">
              <div className="flex">
                <MenuIcon size={15} className="mt-1" />
                <span>&nbsp;</span>
                <span>دسته‌بندی کالاها</span>
              </div>

              <Separator
                orientation="vertical"
                className="data-vertical:h-4 data-vertical:self-auto"
              />

              <div>شگفت‌انگیزها</div>
              <div>سوپرمارکت</div>
              <div>طلا و نقره دیجیتال</div>
              <div>پرفروش‌ترین‌ها</div>
              <div>دیجی‌استایل</div>

              <Separator
                orientation="vertical"
                className="data-vertical:h-4 data-vertical:self-auto"
              />

              <div>در دیجی‌کالا بفروشید!</div>
            </div>

            {/* Actions */}
            <div>
              <Button variant="secondary">
                <MapPinIcon />
                <span>انتخاب آدرس</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Slider */}
      <div className="shrink-0 ease-linear">
        <Image
          src="/img/slider/slider-1.webp"
          alt="Slider One"
          width={2880}
          height={900}
          className="h-auto w-full"
        />
      </div>

      {/* Main */}
      <main className={styles.main}>
        {/* Pages and Services */}
        <Services />

        {/* Discounts and Sell */}
        <AmazingDiscount />

        {/* Cards */}
        <div className="my-5 flex gap-3">
          <Image
            src="/img/cards/8145f1bec7f7bd106d4905e8db7d52447ac7d63e_1794079503.webp"
            alt="Card 4"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/4a017c1d1df4a4e1c7b5aa505523a7588c9b6091_1793738416.webp"
            alt="Card 1"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/90f333757dfa433ae81f1fc225436176196c4ce4_1793796522.webp"
            alt="Card 2"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/97b23f62faa64efb858f9ca15572b2968041eede_1793785610.webp"
            alt="Card 3"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
        </div>

        {/* Express */}
        <div className={styles.express}>
          <div className="px-6 pt-5 pb-3">
            {/* Express Header */}
            <div className="flex items-center gap-2 pb-2">
              <div>
                <Image
                  src="/img/discount/express.webp"
                  alt="Card 4"
                  width={82}
                  height={24}
                />
              </div>
              <div className="text-[20px] font-bold">
                <span>تحویل بگیر!</span>
              </div>
            </div>
            {/* Express message */}
            <div className="flex items-center gap-2 rounded-md bg-orange-100 p-3 pl-0 text-[14px] font-bold">
              <InfoIcon size={17} className="text-orange-400" />
              <div className="w-full">
                <span>برای بررسی امکان ارسال، آدرس را انتخاب کنید.</span>
              </div>

              <Button variant="link" className="text-orange-500">
                <div>انتخاب آدرس</div>
                <ChevronLeftIcon />
              </Button>
            </div>
          </div>

          {/* Express Products */}
          <div className="pb-5 opacity-25">
            <AmazingDiscountProducts>
              <div className="pr-6"></div>
            </AmazingDiscountProducts>
          </div>
        </div>

        {/* Cards 2 */}
        <div className="my-5 flex gap-3">
          <Image
            src="/img/cards/8db7d663294c97dd4073cfebcc310cc0abf7938d_1794033787.webp"
            alt="Card 4"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/d90665a9328144c5993c89b74e7a3435259c06c7_1793791331.webp"
            alt="Card 1"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/da87af9e1fc728117a8bb04e664fba39499579d8_1793791269.webp"
            alt="Card 2"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/fe64748697cc2bb035b889ba97f82de4e1c2a1c5_1793791359.webp"
            alt="Card 3"
            width={314}
            height={240}
            className="h-auto w-full rounded-xl"
          />
        </div>

        {/* Amazing Green */}
        <AmazingDiscount color={"green"} />

        {/*  Categories */}
        <div className="py-6">
          <Categories />
        </div>

        {/*  2 Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/cards/a4bf95d70bf6f130f993cc918011d72f7d7f94b1_1793799622.webp"
            alt="Card 4"
            width={644}
            height={260}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/a3525ccaeea2e4fc373e60f722ac1e36aaa396a4_1793798991.webp"
            alt="Card 1"
            width={644}
            height={260}
            className="h-auto w-full rounded-xl"
          />
        </div>

        {/* Products - Vitamins  */}
        <div className="py-6">
          <ProductsBox
            key="products-vitamins"
            title="ویتامین‌ها و مواد معدنی"
            subtitle="بر اساس سلیقه شما"
            moreLink={"#"}
            items={products}
          />
        </div>

        {/* Products - Mobile Items  */}
        <div className="pb-6">
          <ProductsBox
            key="products-mobile-items"
            title="کیف و کاور گوشی"
            subtitle="بر اساس سلیقه شما"
            moreLink={"#"}
            items={productsMobileItems}
          />
        </div>

        {/* 2 Cards (2)  */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/cards/6f1289599f8006fd3c65eac265566a00b887d9f9_1793786270.webp"
            alt="Card 4"
            width={644}
            height={260}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src="/img/cards/71bd0e5cfa981e72f15b555a4f9fc5b18ae74543_1794044593.webp"
            alt="Card 1"
            width={644}
            height={260}
            className="h-auto w-full rounded-xl"
          />
        </div>

        {/* Products - Mobile  */}
        <div className="py-6">
          <ProductsBox
            key="products-car"
            title="گوشی موبایل"
            subtitle="بر اساس سلیقه شما"
            moreLink={"#"}
            items={productsMobiles}
          />
        </div>

        {/* Products - Car Items  */}
        <div className="pb-6">
          <ProductsBox
            key="products-car"
            title="سایر لوازم خودرو"
            subtitle="بر اساس سلیقه شما"
            moreLink={"#"}
            items={productsCarItems}
          />
        </div>

        {/* Products - Headset Items  */}
        <div className="pb-6">
          <ProductsBox
            key="products-car"
            title="هدفون، هدست و هندزفری"
            subtitle="بر اساس سلیقه شما"
            moreLink={"#"}
            items={productsHeadset}
          />
        </div>

        {/* Products - Skin */}
        <div className="pb-6">
          <ProductsBox
            key="products-car"
            title="کرم آبرسان و مرطوب کننده"
            subtitle="بر اساس سلیقه شما"
            moreLink={"#"}
            items={productsSkin}
          />
        </div>

        {/* Products - Brands */}
        <div className="pb-6">
          <BrandsBox title="محبوب‌ترین برندها" items={brands} moreLink={"#"} />
        </div>

        {/* Hot Products */}
        <div className="pb-6">
          <HotBox items={productsMobileItems} title="پرفروش‌ترین‌ها" />
        </div>

        {/* Suggested */}
        <div className="pb-6">
          <div className="py-3 text-[20px] font-bold">
            <span>پیشنهاد ما</span>
          </div>
          <Products items={productsMobileItems} gride={true} />
          <div className="mt-5 flex items-center justify-center">
            <Button variant="secondary" className="rounded-md p-4">
              <span>مشاهده بیشتر</span>
            </Button>
          </div>
        </div>
      </main>

      {/*  Footer*/}
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
