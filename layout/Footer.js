import { useAppContext } from '../hooks/useAppContext'
function Footer() {
  const { theme } = useAppContext()
  return <footer className={theme === 'light' ? '' : 'dark'}>Footer</footer>
}
export default Footer
