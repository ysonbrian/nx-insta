"use client"

import { auth } from "@/auth"

export default async function Page() {
  const session = await auth()
  return (
    <main>
      <h1>Protected</h1>
      <a href="/api/auth/signout">sign out</a>
      <a href="/">public route</a>
    </main>
  )
}