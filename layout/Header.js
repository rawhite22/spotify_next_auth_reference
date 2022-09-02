import Toggle from '../components/Toggle'
import { useAppContext } from '../hooks/useAppContext'
function Header() {
  const { theme } = useAppContext()
  return (
    <header className={theme === 'light' ? 'header' : 'header dark'}>
      <Toggle />
    </header>
  )
}
export default Header
