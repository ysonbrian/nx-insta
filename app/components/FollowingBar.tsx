"use client"

import { GridLoader } from "react-spinners"
import useSWR from "swr"
import "react-multi-carousel/lib/styles.css"
import Link from "next/link"
import Avatar from "./Avatar"
import { DetailUser } from "../model/user"
import ScrollableBar from "./ScrollableBar"

export default function FollowingBar() {
  const { data, error, isLoading } = useSWR<DetailUser>("/api/user")

  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ]

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <GridLoader size={8} color="#4036d6" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar image={image} highlight />
              <p
                className={`text-sm text-center text-ellipsis overflow-hidden w-full`}
              >
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  )
}
