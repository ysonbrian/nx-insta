<<<<<<< HEAD
// 'use client'

import { useEffect } from "react"
import { useRouter } from "next/router"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { auth } from "../auth"
import LoginButton from "./components/auth/login-button"

export default async function Home() {
  const session = await auth()

  return (
    <>
      <main className="flex flex-col gap-3 justify-center items-center w-full">
        {!session && <LoginButton />}
        {session && <p>Logged in!</p>}
      </main>
    </>
=======
import useSWR, { SWRConfig } from "swr"
import FollowingBar from "@/app/components/FollowingBar"
import PostList from "./components/PostList"
import Sidebar from "./components/Sidebar"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import SwrContext from "./context/SwrContext"

export default async function Home() {
  const session = await auth()
  const user = session?.user
  if (!user) {
    redirect("/auth/signin")
  }
  return (
    <section className="w-full flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4 min-w-0">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/4 ml-8">
        <Sidebar user={user} />
      </div>
    </section>
>>>>>>> 44b71e11051eb85b9d5fb50b9684715a9a08b560
  )
}
