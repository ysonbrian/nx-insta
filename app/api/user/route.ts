import { auth } from "@/auth"
import { getUserByUsername } from "@/sanity/lib"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

type ResponseData = {
  message: string
}

export async function GET(request: Request) {
  const session = await auth()
  const user = session?.user
  if (!user) {
    return new Response("Authentication Error", { status: 401 })
  }
  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  )
}
