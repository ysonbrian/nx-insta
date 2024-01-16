// 'use client'

// import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { auth } from './api/auth/[...nextauth]/auth'
// import { signOut } from './api/auth/[...nextauth]/route'

export default async function Home() {
  // const { data: session } = useSession()
  // console.log('session', session)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button
  //         onClick={async () => {
  //           // signOut({ callbackUrl: 'http://localhost:3000/api/auth/signin' })
  //           signOut()
  //           // revalidatePath('http://localhost:3000/api/auth/signin')
  //           console.log('Hello')
  //         }}
  //       >
  //         Sign out
  //       </button>
  //     </>
  //   )
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // )
  const session = await auth()

  return (
    <>
      {/* <main className='flex flex-col gap-3'>
        <h1>Public</h1>
        <a href='/api/auth/signin'>sign in</a>
        <a href='/protected'>protected route</a>
      </main> */}
      <main className='flex flex-col gap-3'>
        <h1>My Custom Auth Page</h1>
        {!session && <p>Not logged in!</p>}
        {session && <p>Logged in!</p>}
      </main>
    </>
  )
}
