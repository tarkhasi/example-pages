import { Geist, Geist_Mono, Figtree } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { DirectionProvider } from "@/components/ui/direction"

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      // lang="en"
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable
      )}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Test Digikala</title>
      </head>
      <body>
        <DirectionProvider direction="rtl">
          {/*<DirectionProvider>*/}
          <ThemeProvider>{children}</ThemeProvider>
        </DirectionProvider>
      </body>
    </html>
  )
}
