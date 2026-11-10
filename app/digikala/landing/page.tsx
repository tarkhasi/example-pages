import { Button } from "@/components/ui/button"
import styles from "./landing.module.css"
import { ChevronLeftIcon, InfoIcon } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import AmazingDiscount from "@/app/digikala/landing/components/sell/amazing-discount"
import Services from "@/app/digikala/landing/components/services/services"
import Categories from "@/app/digikala/landing/components/categories/categories"
import ProductsBox from "@/app/digikala/landing/components/products/products-box"
import {
  brands,
  products,
  productsCarItems,
  productsHeadset,
  productsMobileItems,
  productsMobiles,
  productsSkin,
} from "@/app/digikala/_data/items.data"
import { BrandsBox } from "@/app/digikala/landing/components/brands/brands-box"
import { HotBox } from "@/app/digikala/landing/components/sell/hot-box"
import Products from "@/app/digikala/landing/components/products/products"
import Header from "@/app/digikala/_components/basic/header"
import Footer from "@/app/digikala/_components/basic/footer"
import Link from "next/link"
import BannerCards from "@/app/digikala/landing/components/banner/banner-cards"
import {
  bannerCards1,
  bannerCards2,
  bannerCards3,
  bannerCards4,
} from "@/app/digikala/_data/banner.data"
import Express from "@/app/digikala/landing/components/products/express"
import { services } from "@/app/digikala/_data/services.data"

export default function Page() {
  return (
    <div className={styles.textBody1}>
      {/* Header */}
      <Header />

      {/* Slider */}
      <div className="shrink-0 ease-linear">
        <Image
          src="/img/digikala/slider/slider-1.webp"
          alt="Slider One"
          width={2880}
          height={900}
          className="h-auto w-full"
        />
      </div>

      {/* Main */}
      <main className={styles.main}>
        {/* Pages and Services */}
        <Services items={services} />

        {/* Discounts and Sell */}
        <AmazingDiscount items={products} />

        {/* Cards */}
        <BannerCards items={bannerCards1} />

        {/* Express */}
        <Express items={products} />

        {/* Cards 2 */}
        <BannerCards items={bannerCards2} />

        {/* Amazing Green */}
        <AmazingDiscount items={products} color={"green"} />

        {/*  Categories */}
        <div className="py-6">
          <Categories />
        </div>

        {/*  Cards 3 */}
        <BannerCards items={bannerCards3} />

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

        {/*  Cards 4 */}
        <BannerCards items={bannerCards4} />

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
          <Products items={productsMobileItems} grid={true} />
          <div className="mt-5 flex items-center justify-center">
            <Button variant="secondary" className="rounded-md p-4">
              <span>مشاهده بیشتر</span>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
