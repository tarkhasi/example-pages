
import localFont from "next/font/local";

export const digikala = localFont({
  src: [
    {
      path: "./fonts/digikala.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-vazirmatn",
})
