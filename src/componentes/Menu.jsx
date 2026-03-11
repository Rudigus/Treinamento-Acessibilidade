import './Menu.css'

function Menu({ paginas, idPaginaAtiva, aoNavegar }) {
  return (
    <aside className="menu">
      <h1 className="menu__titulo">Treinamento de Acessibilidade</h1>
      <p className="menu__subtitulo">Selecione uma pagina para comecar.</p>

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
