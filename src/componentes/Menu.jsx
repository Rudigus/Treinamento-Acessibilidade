import './Menu.css'
import { useTheme } from '../contextos/ThemeContext.jsx'

function Menu({ paginas, idPaginaAtiva, aoNavegar }) {
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

      <nav aria-label="Menu de navegacao principal">
        <ul className="menu__lista">
          {paginas.map((pagina) => {
            const estaAtiva = pagina.id === idPaginaAtiva

            return (
              <li key={pagina.id}>
                <button
                  type="button"
                  className={`menu__botao-navegacao${
                    estaAtiva ? ' esta-ativo' : ''
                  }`}
                  aria-current={estaAtiva ? 'page' : undefined}
                  onClick={() => aoNavegar(pagina.id)}
                >
                  {pagina.titulo}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
