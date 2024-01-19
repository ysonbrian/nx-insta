"use client"

import { LOGIN_PAGE } from "@/routes"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { ClipLoader } from "react-spinners"

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onClick = async (provider: string) => {
    setIsLoading(true)
    await signIn(provider, { callbackUrl: LOGIN_PAGE })
    setIsLoading(false)
  }
  return (
    <button
      className="mx-auto flex items-center justify-center hover:opacity-[0.8] max-w-[250px] w-full"
      onClick={() => onClick("google")}
    >
      <div
        className={`my-14 border p-1 rounded-lg  w-full  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 `}
      >
        <div className=" h-full w-full bg-white p-4 font-bold flex justify-center">
          {!isLoading ? (
            "Sign In Google"
          ) : (
            <ClipLoader color="#953ed3" size={20} />
          )}
        </div>
      </div>
    </button>
  )
}
