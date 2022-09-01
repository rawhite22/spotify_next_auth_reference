import { useSession, signIn, signOut } from 'next-auth/react'
import { Fragment, useEffect } from 'react'

export default function Home() {
  const { data: session } = useSession()
  useEffect(() => {}, [])
  if (session) {
    return (
      <main id='home-page' className='home-page-container'>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    )
  } else {
    return (
      <main id='home-page' className='home-page-container'>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
        <button>Toggle Color Mode</button>
      </main>
    )
  }
}
