import type { NextAuthConfig } from "next-auth"
<<<<<<< HEAD

=======
import Credentials from "next-auth/providers/credentials"

import Github from "next-auth/providers/github"
>>>>>>> 44b71e11051eb85b9d5fb50b9684715a9a08b560
import Google from "next-auth/providers/google"

export default {
  providers: [
<<<<<<< HEAD
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECERT,
    }),
=======
    // Github({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECERT,
    // }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    // Credentials({
    //   async authorize(credentials) {
    //     const validatedFields = LoginSchema.safeParse(credentials)

    //     if (validatedFields.success) {
    //       const { email, password } = validatedFields.data

    //       const user = await getUserByEmail(email)
    //       if (!user || !user.password) return null

    //       const passwordsMatch = await bcrypt.compare(password, user.password)

    //       if (passwordsMatch) return user
    //     }

    //     return null
    //   },
    // }),
>>>>>>> 44b71e11051eb85b9d5fb50b9684715a9a08b560
  ],
} satisfies NextAuthConfig
