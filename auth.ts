import NextAuth, { DefaultSession } from "next-auth"

import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import { db } from "./lib/db"

declare module "next-auth" {
  interface Session {
    user: {
      subName: string
    } & DefaultSession["user"]
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      //  Allow OAuth without email verification

      return true
    },
    async session({ session, token }) {
      console.log("session, token ", session, token)
      if (session.user && token.sub) {
        session.user.subName = "Please modify this"
      }
      console.log("session", session, token)
      return session
    },
    async jwt({ token }) {
      return token
    },
  },
  // adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})
