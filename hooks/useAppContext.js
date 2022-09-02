import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used inside an AppContextProvider')
  }
  return context
}
