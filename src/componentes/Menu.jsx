import './Menu.css'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../contextos/ThemeContext.jsx'

function Menu({ paginas }) {
  const { theme, setTheme } = useTheme()
  const estaEmAltoContraste = theme === 'dark'

  return (
    <aside className="menu" aria-labelledby="menu-titulo">
      <h1 id="menu-titulo" className="menu__titulo">
        Treinamento de Acessibilidade
      </h1>
      <p className="menu__subtitulo">Selecione uma pagina para comecar.</p>
      <div
        className="menu__controle-contraste"
        role="group"
        aria-label="Controle de contraste"
      >
        <p className="menu__titulo-contraste">
          <i className="fas fa-adjust" aria-hidden="true" />
          <span>Contraste de Cor</span>
        </p>

        <div className="menu__opcoes-contraste">
          <button
            type="button"
            className={`menu__botao-contraste${
              estaEmAltoContraste ? ' esta-selecionado' : ''
            }`}
            aria-pressed={estaEmAltoContraste}
            onClick={() => setTheme('dark')}
          >
            Alto Contraste
          </button>
          <button
            type="button"
            className={`menu__botao-contraste${
              !estaEmAltoContraste ? ' esta-selecionado' : ''
            }`}
            aria-pressed={!estaEmAltoContraste}
            onClick={() => setTheme('light')}
          >
            Baixo
            <br />
            Contraste
          </button>
        </div>
      </div>

      <div
        className="menu__controle-fonte"
        role="group"
        aria-label="Controle de tamanho da fonte"
      >
        <p className="menu__titulo-fonte">
          <i className="fas fa-font" aria-hidden="true" />
          <span>Tamanho de Fonte</span>
        </p>

        <div className="menu__opcoes-fonte">
          <button type="button" className="menu__botao-fonte" aria-pressed="false">
            Pequena
          </button>
          <button
            type="button"
            className="menu__botao-fonte esta-selecionado"
            aria-pressed="true"
          >
            Média
          </button>
          <button type="button" className="menu__botao-fonte" aria-pressed="false">
            Grande
          </button>
        </div>
      </div>

      <nav aria-label="Menu de navegacao principal">
        <ul className="menu__lista">
          {paginas.map((pagina) => {
            return (
              <li key={pagina.caminho}>
                <NavLink
                  to={pagina.caminho}
                  end={pagina.caminho === '/'}
                  className={({ isActive }) =>
                    `menu__botao-navegacao${isActive ? ' esta-ativo' : ''}`
                  }
                  aria-label={pagina.titulo}
                >
                  {pagina.titulo}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
