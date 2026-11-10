"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EllipsisIcon } from "lucide-react"

const items = [
  {
    id: "s-p-1",
    image:
      "/img/services/74a5ac2c42df40e2b9e9a1f7ef2fbb87a8f13cad_1771936893.webp",
    name: "اشتراک پلاس",
  },
  {
    id: "s-p-2",
    image:
      "/img/services/1d7ecb2d442364097e01a04c28490d4d06e0fd3a_1784998161.webp",
    name: "وام بانکی",
  },
  {
    id: "s-p-3",
    image:
      "/img/services/326f30e8e54d9ebb9ee57932d3d41de4907aed11_1791640382.webp",
    name: "دیجی‌کوین",
  },
  {
    id: "s-p-4",
    image:
      "/img/services/bcfb2f367141fb0e3db4e1a3def0bb987513e678_1769854388.webp",
    name: "دیجی‌استایل",
  },
  {
    id: "s-p-5",
    image:
      "/img/services/d66e60056aa3aef7648b73a51dfad05f00d4364b_1790864775.webp",
    name: "تخفیف طلا",
  },
  {
    id: "s-p-6",
    image:
      "/img/services/d6b98ec2f51503ff34a613896c77253a9b7581cf_1791290035.webp",
    name: "دانشنامه شاهنامه",
  },
  {
    id: "s-p-7",
    image:
      "/img/services/adebec16b689d713eb4a4e9b9e3473a92b39134f_1790155115.webp",
    name: "سوپرمارکت",
  },
]

export default function Services() {
  const list = items.map((i) => (
    <div key={i.id}>
      <div>
        <Image
          src={i.image}
          alt={i.name}
          width="52"
          height="52"
          className="mx-auto mb-2"
        />
      </div>
      <div>{i.name}</div>
    </div>
  ))

  return (
    <div className={"flex justify-between gap-4 py-6 text-center"}>
      {list}
      <div>
        <div className="mx-auto mb-2">
          <Button size="icon" className="p-6" variant="secondary">
            <EllipsisIcon size="60" />
          </Button>
        </div>
        <div>
          <span>بیشتر</span>
        </div>
      </div>
    </div>
  )
}
