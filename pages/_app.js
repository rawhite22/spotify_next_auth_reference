import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

export default function App({
  Component,
  router,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
