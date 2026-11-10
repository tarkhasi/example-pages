export { cn } from "cn"

export function toPersianNumber(value: string | number): string {
  return String(value).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])
}