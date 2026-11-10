import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { DirectionProvider } from "@/components/ui/direction"
import React from "react"

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
      className={cn("antialiased")}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
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
