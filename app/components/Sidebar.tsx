import { auth } from "@/auth"
import Link from "next/link"
import Avatar from "./Avatar"
import { User } from "../model/user"

type Props = {
  user: User
}

const FOOTER_LIST = [
  { name: "About", src: "/" },
  { name: "Help", src: "/" },
  { name: "Press ", src: "/" },
  { name: "API", src: "/" },
  { name: "Jobs", src: "/" },
  { name: "Privacy", src: "/" },
  { name: "Terms", src: "/" },
  { name: "Location", src: "/" },
  { name: "Language", src: "/" },
]

export default async function Sidebar({
  user: { name, username, image },
}: Props) {
  return (
    <section className={`flex flex-col gap-4 max-w-[200px]`}>
      <div className={`flex  items-center`}>
        {image && <Avatar image={image} position={"side"} />}
        <div className="ml-4">
          <p className={`font-bold`}>{username}</p>
          <p className={`text-neutral-500 leading-4`}>{name}</p>
        </div>
      </div>
      <ul className={`flex flex-wrap  w-full`}>
        {FOOTER_LIST.map((list) => (
          <li key={list.name} className="text-neutral-500 text-sm">
            <Link href={list.src}>{`${list.name} ・ `}</Link>
          </li>
        ))}
      </ul>
      <div className={`font-bold text-sm text-neutral-500`}>
        @Copyright NXSTAGRAM from METAL
      </div>
    </section>
  )
}
