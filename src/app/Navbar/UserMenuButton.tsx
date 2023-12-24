'use client'
import { Session } from 'next-auth'
import { FaUser } from 'react-icons/fa'
import Image from 'next/image'
import imgPlaceholder from '@/assets/profile-pic-placeholder.png'
import { signIn, signOut } from 'next-auth/react'
interface UserMenuButtonProps {
  session: Session | null
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user
  return (
    <div className='dropdown-end dropdown'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        {user ? (
          <Image
            src={user?.image || imgPlaceholder}
            alt='user profile image'
            width={40}
            height={40}
            className='w-10 rounded-full'
            priority
          />
        ) : (
          <FaUser />
        )}
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box menu-sm z-30 mt-3 w-52 bg-base-100 p-2 shadow'
      >
        {user ? (
          <button onClick={() => signOut({ callbackUrl: '/' })}>
            Sign out
          </button>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </ul>
    </div>
  )
}
