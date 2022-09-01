import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import '../styles/globals.css'

export default function App({
  Component,
  router,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    console.log(document)
  }, [])
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
