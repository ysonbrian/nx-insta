import { redirect } from "next/navigation"
import { auth } from "../api/auth/[...nextauth]/route"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) return redirect("/")

  return <>{children}</>
}
