"use client"
import React, { useEffect, useState } from "react"
import { signIn, signOut } from "next-auth/react"

import Image from "next/image"

type UserProp = {
  email: string
  image: string
  name: string
}

export default function UserStatus({ session }: any) {
  const [user, setUser] = useState<UserProp>({ email: "", image: "", name: "" })

  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session])
  const handleSignOut = async () => {
    await signOut()
  }
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" })
  }

  if (!session) {
    return (
      <form onSubmit={handleSignIn}>
        <button type="submit">Sign In</button>
      </form>
    )
  }

  return (
    <div>
      <div className={`flex gap-2`}>
        <Image
          src={session.user.image || user.image}
          width={30}
          height={30}
          alt={user.email}
          className={`rounded-lg hover:opacity-[70%] hover:cursor-pointer`}
        />
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  )
}
