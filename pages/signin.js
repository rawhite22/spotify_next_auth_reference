import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react'
function signin({ providers }) {
  return (
    <main id='sign-in-page'>
      {Object.values(providers).map((provider) => {
        return (
          <section className='sign-in' key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </section>
        )
      })}
    </main>
  )
}

export default signin

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/' },
    }
  }

  return {
    props: {
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
    },
  }
}
