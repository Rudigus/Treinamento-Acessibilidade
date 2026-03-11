import './Menu.css'
import useIsMobile from '../utils/useIsMobile.js'
import MenuDesktop from './menu/MenuDesktop.jsx'
import MenuMobile from './menu/MenuMobile.jsx'

function Menu({ paginas }) {
  const isMobile = useIsMobile(900)

  if (isMobile) {
    return <MenuMobile paginas={paginas} />
  }

  return <MenuDesktop paginas={paginas} />
}

export default Menu
