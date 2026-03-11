import { useState } from 'react'
import { useTheme } from '../../contextos/ThemeContext.jsx'
import MenuCommonContent from './MenuCommonContent.jsx'

const ID_MENU_MOBILE_DROPDOWN = 'menu-mobile-dropdown'

function MenuMobile({ paginas }) {
  const [menuAberto, setMenuAberto] = useState(false)
  const { theme, setTheme } = useTheme()

  const alternarMenu = () => {
    setMenuAberto((estadoAtual) => !estadoAtual)
  }

  return (
    <div className="menu-mobile">
      <div className="menu-mobile-topbar">
        <h1 className="menu-mobile__titulo">Treinamento de Acessibilidade</h1>

        <button
          type="button"
          className={`menu-mobile__toggle${menuAberto ? ' esta-selecionado' : ''}`}
          aria-expanded={menuAberto}
          aria-controls={ID_MENU_MOBILE_DROPDOWN}
          aria-label={menuAberto ? 'Fechar menu de navegacao' : 'Abrir menu de navegacao'}
          onClick={alternarMenu}
        >
          <i className="fas fa-bars" aria-hidden="true" />
        </button>
      </div>

      {menuAberto && (
        <div id={ID_MENU_MOBILE_DROPDOWN} className="menu-mobile-dropdown">
          <p className="menu__subtitulo">Selecione uma pagina para comecar.</p>
          <MenuCommonContent paginas={paginas} theme={theme} setTheme={setTheme} />
        </div>
      )}
    </div>
  )
}

export default MenuMobile
