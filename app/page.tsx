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
  )
}
