import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'
function Toggle() {
  const { theme, dispatch } = useAppContext()
  const [toggle, setToggle] = useState(theme === 'light' ? false : true)
  const handleToggle = () => {
    if (theme === 'light') {
      dispatch({ type: 'DARK' })
      setToggle(true)
      localStorage.setItem('theme', 'dark')
    } else {
      dispatch({ type: 'LIGHT' })
      setToggle(false)
      localStorage.removeItem('theme')
    }
  }
  return (
    <div
      onClick={() => handleToggle()}
      className={
        theme === 'light' ? 'toggle-component' : 'toggle-component dark'
      }>
      <motion.div layout className='toggle-ball'></motion.div>
    </div>
  )
}
export default Toggle
