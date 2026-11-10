"use client"

const productsMobiles = [
  {
    id: "p-mobile-1",
    image:
      "/img/digikala/products/c7d45684363f18714263c6e1c2eb02ac03f85333_1793520838.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "",
    price_with_discount: "",
    price: "۱۱۱,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-2",
    image:
      "/img/digikala/products/3b15e1f3d948a5b12103a4faf9d3bfe8a3d0a48e_1767796426.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "",
    price_with_discount: "",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-3",
    image:
      "/img/digikala/products/8ecf0fce5b38abf901a73e816e5107e2d01bfb7c_1790769104.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "۱۱",
    price_with_discount: "۱۸۸,۸۸۰,۰۰۰",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-4",
    image:
      "/img/digikala/products/0a8fff942ea8ee0359edadad85daae399b0e357c_1763462145.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "۱۱",
    price_with_discount: "۱۸۸,۸۸۰,۰۰۰",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-5",
    image:
      "/img/digikala/products/d7c815ba7a380a374408c22b6b31e66be3b41592_1791357490.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "۱۱",
    price_with_discount: "۱۸۸,۸۸۰,۰۰۰",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-6",
    image:
      "/img/digikala/products/c7d45684363f18714263c6e1c2eb02ac03f85333_1793520838.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "",
    price_with_discount: "",
    price: "۱۱۱,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-7",
    image:
      "/img/digikala/products/3b15e1f3d948a5b12103a4faf9d3bfe8a3d0a48e_1767796426.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "",
    price_with_discount: "",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-8",
    image:
      "/img/digikala/products/8ecf0fce5b38abf901a73e816e5107e2d01bfb7c_1790769104.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "۱۱",
    price_with_discount: "۱۸۸,۸۸۰,۰۰۰",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-9",
    image:
      "/img/digikala/products/0a8fff942ea8ee0359edadad85daae399b0e357c_1763462145.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "۱۱",
    price_with_discount: "۱۸۸,۸۸۰,۰۰۰",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
  {
    id: "p-mobile-10",
    image:
      "/img/digikala/products/d7c815ba7a380a374408c22b6b31e66be3b41592_1791357490.webp",
    name: "گوشی موبایل آنر مدل 600 Lite دو سیم‌کارت ظرفیت 256...",
    discount: "۱۱",
    price_with_discount: "۱۸۸,۸۸۰,۰۰۰",
    price: "۱۱۸,۸۸۰,۰۰۰",
  },
]

const productsMobileItems = [
  {
    id: "p-m-i-1",
    image:
      "/img/digikala/products/856515f5128ad6c5033d8d63ee853abd2bd53f44_1764755425.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "",
    price_with_discount: "",
    price: "۱,۸۸۰,۰۰۰",
    special_offer: false,
  },
  {
    id: "d-m-i-2",
    image:
      "/img/digikala/products/77704b0e5e746cdb8fbb6ee8f60a24421789036f_1771718431.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
    special_offer: true,
  },
  {
    id: "d-m-i-3",
    image:
      "/img/digikala/products/5af1ad8e543f9d584bf4b358c63a7d96f0b5db8e_1782824003.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-m-i-4",
    image:
      "/img/digikala/products/113560fda998ab7657040f6d4c04651b97c04634_1703172975.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-m-i-5",
    image:
      "/img/digikala/products/5a6b05ec7afbff9e63a69a1a9c39e8837491f731_1761468551.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "p-m-i-6",
    image:
      "/img/digikala/products/856515f5128ad6c5033d8d63ee853abd2bd53f44_1764755425.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "",
    price_with_discount: "",
    price: "۱,۸۸۰,۰۰۰",
  },
  {
    id: "d-m-i-7",
    image:
      "/img/digikala/products/77704b0e5e746cdb8fbb6ee8f60a24421789036f_1771718431.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-m-i-8",
    image:
      "/img/digikala/products/5af1ad8e543f9d584bf4b358c63a7d96f0b5db8e_1782824003.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-m-i-9",
    image:
      "/img/digikala/products/113560fda998ab7657040f6d4c04651b97c04634_1703172975.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-m-i-10",
    image:
      "/img/digikala/products/5a6b05ec7afbff9e63a69a1a9c39e8837491f731_1761468551.webp",
    name: "کاور کی -زد دوو مدل Ares Sport مناسب برای... ",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-m-i-11",
    image:
      "/img/digikala/products/4341168b14ce95e927fe92e99593e668db9f5739_1792325528.webp",
    name: "هدفون بلوتوثی موزیک آپولو مدل REK-50...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-m-i-12",
    image:
      "/img/digikala/products/322c05444444122391bbf76e48ad152c498e03f9_1793190924.webp",
    name: "هدفون بلوتوثی موزیک آپولو مدل YRB/22",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-m-i-13",
    image:
      "/img/digikala/products/98bb110cefc58dcc0ed96eff8914c2bb3d48d318_1786533653.webp",
    name: "هدفون بلوتوثی انکر مدل SoundCore R50i A3949 بدون ...",
    discount: "",
    price_with_discount: "",
    price: "۱,۱۵۰,۱۶۰",
  },
  {
    id: "d-m-i-14",
    image:
      "/img/digikala/products/f0cc2b8d3d94b3256c2fd82437900fbe7461fc0d_1786571878.webp",
    name: "هدفون بلوتوثی انکر مدل R50i NC با حذف نویز فعال ...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-m-i-15",
    image:
      "/img/digikala/products/4341168b14ce95e927fe92e99593e668db9f5739_1792325528.webp",
    name: "هدفون بلوتوثی موزیک آپولو مدل REK-50...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-m-i-16",
    image:
      "/img/digikala/products/f0cc2b8d3d94b3256c2fd82437900fbe7461fc0d_1786571878.webp",
    name: "هدفون بلوتوثی انکر مدل R50i NC با حذف نویز فعال ...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
]

const productsCarItems = [
  {
    id: "d-car-items-1",
    image:
      "/img/digikala/products/b38270cf9b678901d588b5837edba0b83f6725be_1774854519.webp",
    name: "جامپ استارتر خودرو بیسوس مدل...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-car-items-2",
    image:
      "/img/digikala/products/0a32f1f67397e84ed4059b85a1d3d9bc806af5d4_1635523255.webp",
    name: "قیف خودرو مدل ZA-GHR1",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-car-items-3",
    image:
      "/img/digikala/products/edc44ef187a6f7eec9a0d27a59dc656c78db4247_1671189402.webp",
    name: "لامپ اس ام دی  ترمز خودرو مدل Hitech بسته دو عددی",
    discount: "",
    price_with_discount: "",
    price: "۱,۱۵۰,۱۶۰",
  },
  {
    id: "d-car-items-4",
    image: "/img/digikala/products/119134757.webp",
    name: "لامپ اس ام دی  ترمز خودرو مدل Hitech بسته دو عددی",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-car-items-5",
    image:
      "/img/digikala/products/b38270cf9b678901d588b5837edba0b83f6725be_1774854519.webp",
    name: "جامپ استارتر خودرو بیسوس مدل...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-car-items-6",
    image:
      "/img/digikala/products/0a32f1f67397e84ed4059b85a1d3d9bc806af5d4_1635523255.webp",
    name: "قیف خودرو مدل ZA-GHR1",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-car-items-7",
    image:
      "/img/digikala/products/edc44ef187a6f7eec9a0d27a59dc656c78db4247_1671189402.webp",
    name: "لامپ اس ام دی  ترمز خودرو مدل Hitech بسته دو عددی",
    discount: "",
    price_with_discount: "",
    price: "۱,۱۵۰,۱۶۰",
  },
  {
    id: "d-car-items-8",
    image: "/img/digikala/products/119134757.webp",
    name: "لامپ اس ام دی  ترمز خودرو مدل Hitech بسته دو عددی",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
]

const productsSkin = [
  {
    id: "d-skin-items-1",
    image:
      "/img/digikala/products/a3e41f6915185913a5f16ad5d4f569e88669b7f3_1788862922.webp",
    name: "کرم آبرسان ژیناژن مدل HC حجم 50 میلی‌لیتر",
    discount: "",
    price_with_discount: "",
    price: "۴۲۷,۳۵۰",
  },
  {
    id: "d-skin-items-2",
    image:
      "/img/digikala/products/e50c784329c3786a59c1e0a0914e43c2695b3aed_1760871822.webp",
    name: "کرم مرطوب کننده صورت و گردن کلامین مدل collagen bank ...",
    discount: "",
    price_with_discount: "",
    price: "۴۱۸,۰۰۰",
  },
  {
    id: "d-skin-items-3",
    image:
      "/img/digikala/products/0657d59163e165ac3fd4e86d005f5ade63828bc3_1711439803.webp",
    name: "کرم مرطوب کننده مای مدل جوجوبا حجم 200 میلی لیتر",
    discount: "۲۹",
    price_with_discount: "۸۷۰,۰۰۰",
    price: "۶۱۶,۰۲۰",
  },
  {
    id: "d-skin-items-4",
    image:
      "/img/digikala/products/cc951665efcfeeeebcaf1d2295abe7bb45a06fa1_1754243718.webp",
    name: "کرم مرطوب‌کننده آردن بیوتی مدل collagen حجم 50 میلی‌لیتر",
    discount: "",
    price_with_discount: "",
    price: "۶۲۶,۰۲۰",
  },
  {
    id: "d-skin-items-5",
    image:
      "/img/digikala/products/a3e41f6915185913a5f16ad5d4f569e88669b7f3_1788862922.webp",
    name: "کرم آبرسان ژیناژن مدل HC حجم 50 میلی‌لیتر",
    discount: "",
    price_with_discount: "",
    price: "۴۲۷,۳۵۰",
  },
  {
    id: "d-skin-items-6",
    image:
      "/img/digikala/products/e50c784329c3786a59c1e0a0914e43c2695b3aed_1760871822.webp",
    name: "کرم مرطوب کننده صورت و گردن کلامین مدل collagen bank ...",
    discount: "",
    price_with_discount: "",
    price: "۴۱۸,۰۰۰",
  },
  {
    id: "d-skin-items-7",
    image:
      "/img/digikala/products/0657d59163e165ac3fd4e86d005f5ade63828bc3_1711439803.webp",
    name: "کرم مرطوب کننده مای مدل جوجوبا حجم 200 میلی لیتر",
    discount: "۲۹",
    price_with_discount: "۸۷۰,۰۰۰",
    price: "۶۱۶,۰۲۰",
  },
  {
    id: "d-skin-items-8",
    image:
      "/img/digikala/products/cc951665efcfeeeebcaf1d2295abe7bb45a06fa1_1754243718.webp",
    name: "کرم مرطوب‌کننده آردن بیوتی مدل collagen حجم 50 میلی‌لیتر",
    discount: "",
    price_with_discount: "",
    price: "۶۲۶,۰۲۰",
  },
]

const productsHeadset = [
  {
    id: "d-headset-items-1",
    image:
      "/img/digikala/products/4341168b14ce95e927fe92e99593e668db9f5739_1792325528.webp",
    name: "هدفون بلوتوثی موزیک آپولو مدل REK-50...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-headset-items-2",
    image:
      "/img/digikala/products/322c05444444122391bbf76e48ad152c498e03f9_1793190924.webp",
    name: "هدفون بلوتوثی موزیک آپولو مدل YRB/22",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-headset-items-3",
    image:
      "/img/digikala/products/98bb110cefc58dcc0ed96eff8914c2bb3d48d318_1786533653.webp",
    name: "هدفون بلوتوثی انکر مدل SoundCore R50i A3949 بدون ...",
    discount: "",
    price_with_discount: "",
    price: "۱,۱۵۰,۱۶۰",
  },
  {
    id: "d-headset-items-4",
    image:
      "/img/digikala/products/f0cc2b8d3d94b3256c2fd82437900fbe7461fc0d_1786571878.webp",
    name: "هدفون بلوتوثی انکر مدل R50i NC با حذف نویز فعال ...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-headset-items-5",
    image:
      "/img/digikala/products/4341168b14ce95e927fe92e99593e668db9f5739_1792325528.webp",
    name: "هدفون بلوتوثی موزیک آپولو مدل REK-50...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-headset-items-6",
    image:
      "/img/digikala/products/322c05444444122391bbf76e48ad152c498e03f9_1793190924.webp",
    name: "هدفون بلوتوثی موزیک آپولو مدل YRB/22",
    discount: "۸۸",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-headset-items-7",
    image:
      "/img/digikala/products/98bb110cefc58dcc0ed96eff8914c2bb3d48d318_1786533653.webp",
    name: "هدفون بلوتوثی انکر مدل SoundCore R50i A3949 بدون ...",
    discount: "",
    price_with_discount: "",
    price: "۱,۱۵۰,۱۶۰",
  },
  {
    id: "d-headset-items-8",
    image:
      "/img/digikala/products/f0cc2b8d3d94b3256c2fd82437900fbe7461fc0d_1786571878.webp",
    name: "هدفون بلوتوثی انکر مدل R50i NC با حذف نویز فعال ...",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
]

const products = [
  {
    id: "d-p-1",
    image:
      "/img/digikala/products/7ecf6e35ca85f787e4a9eab369d05f23813a34b6_1645431975.webp",
    name: "کپسول ب کمپلکس آپوویتال بسته 40 عددی",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-p-2",
    image:
      "/img/digikala/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-3",
    image:
      "/img/digikala/products/947f8dc8be9d84d53c56582fef7e64fa7c1323f1_1786696299.webp",
    name: "ژل آبرسان تیلسیم مدل هیالورونیک اسید حجم ۵۰..",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-4",
    image:
      "/img/digikala/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-5",
    image:
      "/img/digikala/products/52cd0a1a4efc75857760e1cce30d114692e4b946_1769210160.webp",
    name: "عینک محافظ  چشم مدل TR31-Anti ...",
    discount: "۷۷",
    price_with_discount: "۳,۰۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: "d-p-6",
    image:
      "/img/digikala/products/7ecf6e35ca85f787e4a9eab369d05f23813a34b6_1645431975.webp",
    name: "کپسول ب کمپلکس آپوویتال بسته 40 عددی",
    discount: "۸۸",
    price_with_discount: "۴۱۸,۰۰۰",
    price: "۵۰,۱۶۰",
  },
  {
    id: "d-p-7",
    image:
      "/img/digikala/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-8",
    image:
      "/img/digikala/products/947f8dc8be9d84d53c56582fef7e64fa7c1323f1_1786696299.webp",
    name: "ژل آبرسان تیلسیم مدل هیالورونیک اسید حجم ۵۰..",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-9",
    image:
      "/img/digikala/products/aa9f2b1095f76625029079d56d6746ddaec11998_1784810442.webp",
    name: "سرم آبرسان بعد از اصلاح صورت آقایان تیلسیم...",
    discount: "۸۰",
    price_with_discount: "۱,۷۰۰,۰۰۰",
    price: "۳۳۹,۰۰۰",
  },
  {
    id: "d-p-10",
    image:
      "/img/digikala/products/52cd0a1a4efc75857760e1cce30d114692e4b946_1769210160.webp",
    name: "عینک محافظ  چشم مدل TR31-Anti ...",
    discount: "۷۷",
    price_with_discount: "۳,۰۰۰,۰۰۰",
    price: "۶۹۹,۰۰۰",
  },
]

const brands = [
  {
    id: "brand-1",
    image: "/img/digikala/brands/6613.webp",
    name: "رانی",
  },
  {
    id: "brand-2",
    image:
      "/img/digikala/brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.webp",
    name: "ترابیکا",
  },
  {
    id: "brand-3",
    image: "/img/digikala/brands/35.webp",
    name: "چرم مشهد",
  },
  {
    id: "brand-4",
    image: "/img/digikala/brands/1800.webp",
    name: "ای دیتا",
  },
  {
    id: "brand-5",
    image:
      "/img/digikala/brands/3e0100126c0bccc9cbb02aa6f869eac6c1240027_1607154301.webp",
    name: "مدوپد",
  },
  {
    id: "brand-6",
    image: "/img/digikala/brands/6613.webp",
    name: "رانی",
  },
  {
    id: "brand-7",
    image:
      "/img/digikala/brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.webp",
    name: "ترابیکا",
  },
  {
    id: "brand-8",
    image: "/img/digikala/brands/35.webp",
    name: "چرم مشهد",
  },
  {
    id: "brand-9",
    image: "/img/digikala/brands/1800.webp",
    name: "ای دیتا",
  },
  {
    id: "brand-10",
    image:
      "/img/digikala/brands/3e0100126c0bccc9cbb02aa6f869eac6c1240027_1607154301.webp",
    name: "مدوپد",
  },
  {
    id: "brand-11",
    image:
      "/img/digikala/brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.webp",
    name: "ترابیکا",
  },
  {
    id: "brand-12",
    image: "/img/digikala/brands/35.webp",
    name: "چرم مشهد",
  },
  {
    id: "brand-13",
    image: "/img/digikala/brands/1800.webp",
    name: "ای دیتا",
  },
  {
    id: "brand-14",
    image:
      "/img/digikala/brands/3e0100126c0bccc9cbb02aa6f869eac6c1240027_1607154301.webp",
    name: "مدوپد",
  },
  {
    id: "brand-16",
    image: "/img/digikala/brands/6613.webp",
    name: "رانی",
  },
  {
    id: "brand-17",
    image:
      "/img/digikala/brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.webp",
    name: "ترابیکا",
  },
]

export {
  products,
  productsMobileItems,
  productsMobiles,
  productsCarItems,
  productsHeadset,
  productsSkin,
  brands,
}
