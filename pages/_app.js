import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AppContextProvider } from '../context/AppContext'
import Layout from '../layout'
import '../styles/global.css'
import { useAppContext } from '../hooks/useAppContext'

export default function App({
  Component,
  router,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <AppContextProvider>
        <Layout>
          <AnimatePresence mode='wait' initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </AppContextProvider>
    </SessionProvider>
  )
}
