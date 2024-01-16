// // import NextAuth from 'next-auth'
// // import GoogleProvider from 'next-auth/providers/google'
// // import { AuthOptions } from 'next-auth'

// // export const authOptions: AuthOptions = {
// //   providers: [
// //     GoogleProvider({
// //       clientId: process.env.GOOGLE_CLIENT_ID ?? '',
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
// //     }),
// //   ],

// //   callbacks: {
// //     async jwt({ token, account }) {
// //       // Persist the OAuth access_token to the token right after signin
// //       if (account) {
// //         token.accessToken = account.access_token
// //       }
// //       return token
// //     },
// //     async session({ session, token, user }) {
// //       if (session.user) {
// //         session.user.id = user.id // 세션에 사용자 ID를 저장함
// //       }

// //       return session
// //     },

// //     async signIn({ account, profile }) {
// //       if (account.provider === 'google') {
// //         console.log('성공!!!!!')
// //         return profile.email_verified && profile.email.endsWith('@gmail.com')
// //       }
// //       return false // Do different verification for other providers that don't have `email_verified`
// //     },
// //   },
// //   events: {
// //     async signOut({ token, session }) {
// //       console.log('haha', token, session)
// //     },
// //   },
// //   secret: process.env.NEXTAUTH_SECRET,
// // }

// // export const { signIn, signOut } = NextAuth(authOptions)

// // // export const handler = NextAuth(authOptions)

// // // export { handler as GET, handler as POST }

import NextAuth from 'next-auth'
// import Google from 'next-auth/providers/google'
import GoogleProvider from 'next-auth/providers/google'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
})
