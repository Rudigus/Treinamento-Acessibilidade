import { useTheme } from '../../contextos/ThemeContext.jsx'
import MenuCommonContent from './MenuCommonContent.jsx'

function MenuDesktop({ paginas }) {
  const { theme, setTheme } = useTheme()

  return (
    <aside className="menu-desktop" aria-labelledby="menu-titulo">
      <h1 id="menu-titulo" className="menu__titulo">
        Treinamento de Acessibilidade
      </h1>
      <p className="menu__subtitulo">Selecione uma pagina para comecar.</p>

      <MenuCommonContent paginas={paginas} theme={theme} setTheme={setTheme} />
    </aside>
  )
}

export default MenuDesktop
