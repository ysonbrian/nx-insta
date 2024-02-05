"use client"

import { signIn } from "next-auth/react"
import React from "react"
import ColorButton from "./ui/ColorButton"

type Props = {
  callbackUrl: string
}
export default function SignIn({ callbackUrl }: Props) {
  console.log("DASFASFASFASFAS", callbackUrl)
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: "/search" })
  }
  return (
    <section className="flex justify-center mt-24 ">
      {/* {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => onClick("google")}>Sign in with Google</button>
        </div>
      ))} */}
      <ColorButton
        text={`Sign in with Google`}
        onClick={() => onClick("google")}
        size="big"
      />
    </section>
  )
}
