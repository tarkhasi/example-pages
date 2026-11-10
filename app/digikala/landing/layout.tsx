import { Geist, Geist_Mono, Figtree } from "next/font/google"

import { cn } from "@/lib/utils";
import { DirectionProvider } from "@/components/ui/direction"
import { digikala } from "@/app/digikala/landing/fotns"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={digikala.className}>{children}</div>
}
