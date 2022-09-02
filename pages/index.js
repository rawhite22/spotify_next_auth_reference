import { useSession, signIn, signOut } from 'next-auth/react'
import { Fragment, useEffect } from 'react'
import PageTransistion from '../components/PageTransition'
import { useAppContext } from '../hooks/useAppContext'
export default function Home() {
  const { theme, dispatch } = useAppContext()
  const { data: session } = useSession()
  useEffect(() => {}, [])
  if (session) {
    return (
      <PageTransistion>
        <main
          id='home-page'
          className={
            theme === 'light'
              ? 'home-page-container'
              : 'home-page-container dark'
          }>
          Signed in as {session?.token?.email} <br />
          <button
            onClick={async () => {
              const res = await fetch('/api/playlists')
              const data = await res.json()
              console.log(data)
            }}>
            Fetch
          </button>
          <button onClick={() => signOut()}>Sign out</button>
        </main>
      </PageTransistion>
    )
  } else {
    return (
      <PageTransistion>
        <main
          id='home-page'
          className={
            theme === 'light'
              ? 'home-page-container'
              : 'home-page-container dark'
          }>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
          <button
            onClick={async () => {
              const res = await fetch('/api/playlists')
              const data = await res.json()
              console.log(data)
            }}>
            Fetch
          </button>
          <button
            onClick={() =>
              dispatch({ type: theme === 'light' ? 'DARK' : 'LIGHT' })
            }>
            Toggle Color Mode
          </button>
        </main>
      </PageTransistion>
    )
  }
}
