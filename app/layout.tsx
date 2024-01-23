import type { Metadata } from "next"
import { Inter, Nanum_Gothic } from "next/font/google"
import "./globals.css"
import Nav from "./ui/Nav"

const inter = Inter({ subsets: ["latin"] })
const nanum_gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Nxstagram",
  description:
    "Nxstagram for those who want to share their thoughts or daily life.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nanum_gothic.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
