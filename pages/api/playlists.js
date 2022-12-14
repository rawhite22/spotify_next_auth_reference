import { getUsersPlaylists } from '../../utils/spotify'
import { getSession } from 'next-auth/react'

const handler = async (req, res) => {
  try {
    const {
      token: { accessToken },
    } = await getSession({ req })

    const response = await getUsersPlaylists(accessToken)
    const { items } = await response.json()

    return res.status(200).json({ items })
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

export default handler
