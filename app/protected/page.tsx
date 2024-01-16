'use client'
import { auth } from '../api/auth/[...nextauth]/route'

export default async function Page() {
  const session = await auth()
  console.log('session', session)
  return (
    <main>
      <h1>Protected</h1>
      <a href='/api/auth/signout'>sign out</a>
      <a href='/'>public route</a>
    </main>
  )
}
