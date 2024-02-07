<<<<<<< HEAD
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const {
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
})
=======
export { GET, POST } from "@/auth"
>>>>>>> 44b71e11051eb85b9d5fb50b9684715a9a08b560
