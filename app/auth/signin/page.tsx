import SignIn from "@/app/components/SignIn"
import { auth } from "@/auth"
import { getProviders } from "next-auth/react"
import { redirect } from "next/navigation"
import React from "react"
type Props = {
  searchParams: {
    callbackUrl: string
  }
}
export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await auth()
  if (session) {
    redirect("/")
  }
  // const providers = (await getProviders()) ?? {}
  // console.log("providers", providers)
  return <SignIn callbackUrl={callbackUrl ?? "/"} />
}
