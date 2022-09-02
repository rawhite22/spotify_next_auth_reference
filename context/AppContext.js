import { createContext, useEffect, useReducer } from 'react'

export const AppContext = createContext()
export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT':
      return { ...state, theme: 'light' }
    case 'DARK':
      return { ...state, theme: 'dark' }
    default:
      return state
  }
}
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    theme: 'light',
  })
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      dispatch({ type: 'DARK' })
    }
  }, [])
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
