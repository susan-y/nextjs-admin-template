'use client'
import {signIn, signOut, useSession} from 'next-auth/react'

import LogoutIcon from '@mui/icons-material/Logout'
import {User} from '@nextui-org/react'

export default function LoginButton() {
  const {data: session} = useSession()
  if (session) {
    return (
      <div className="flex flex-row gap-2 items-center">
        <User
          name={session.user?.name}
          description={session.user?.email}
          avatarProps={{
            src: `https://i.pravatar.cc/150?u=${session.user?.email}`
          }}
        />
        <button
          className="border-slate-300 rounded-md bg-blue-300 p-2"
          onClick={() => signOut({callbackUrl: '/'})}>
          <LogoutIcon></LogoutIcon>
        </button>
      </div>
    )
  }
  return (
    <>
      <br />
      <button className="border-slate-300" onClick={() => signIn()}>
        Login
      </button>
    </>
  )
}
