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
    console.log("hahaha")
    await signOut()
  }

  if (!session) {
    console.log("INSIDE!")
    return (
      <button
        onClick={() => {
          signIn("google", { callbackUrl: "/" })
        }}
      >
        Sign In
      </button>
    )
  }

  return (
    <div>
      <div className={`flex gap-2`}>
        <Image
          src={user.image}
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
