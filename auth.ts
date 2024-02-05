import NextAuth, { DefaultSession } from "next-auth"

import authConfig from "@/auth.config"
import { createUser, getUsers } from "./sanity/lib"

// declare module "next-auth" {
//   interface Session {
//     user: {
//       username: string
//     } & DefaultSession["user"]
//   }
// }
type SanityUserType = {
  image: string
  _rev: string
  email: string
  username: string
  _createdAt: string
  _type: string
  name: string
  _id: string
  _updatedAt: string
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  callbacks: {
    async session({ session }) {
      const user = session?.user
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        }
      }
      return session
    },
    async signIn({ user: { id, name, image, email } }) {
      if (!email) return false
      await createUser({
        id,
        name: name || "",
        image,
        email,
        username: email.split("@")[0],
      })
      return true
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: { strategy: "jwt" },
  ...authConfig,
})
