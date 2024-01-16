import React, { Suspense } from 'react'
import { HiOutlineHome } from 'react-icons/hi2'
import { FiSearch } from 'react-icons/fi'
import { VscDiffAdded } from 'react-icons/vsc'
import Link from 'next/link'
// import { auth } from '../api/auth/[...nextauth]/route'
import UserStatus from './UserStatus'
import { auth } from '../api/auth/[...nextauth]/auth'

const NAV_LINKS = [
  { src: '/', icon: <HiOutlineHome size={22} /> },
  {
    src: 'search',
    icon: <FiSearch size={22} />,
  },
  {
    src: 'upload',
    icon: <VscDiffAdded size={22} />,
  },
]

export default async function Nav() {
  const session = await auth()

  return (
    <nav className={`flex justify-between bg-white px-56 py-4`}>
      <div className={`font-bold tracking-wider text-xl`}>Nxstagram</div>
      <div className={`flex gap-4`}>
        <ul className={`flex items-center gap-4`}>
          {NAV_LINKS.map((link, index) => (
            <Link key={index} href={link.src} className={``}>
              {link.icon}
            </Link>
          ))}
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <UserStatus session={session} />
        </Suspense>
      </div>
    </nav>
  )
}
