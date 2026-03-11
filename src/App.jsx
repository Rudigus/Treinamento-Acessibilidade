import { useMemo, useState } from 'react'
import Menu from './componentes/Menu.jsx'
import Inicio from './paginas/Inicio/Inicio.jsx'
import Exercicio1 from './paginas/Exercicio1/Exercicio1.jsx'
import Exercicio2 from './paginas/Exercicio2/Exercicio2.jsx'
import Exercicio3 from './paginas/Exercicio3/Exercicio3.jsx'
import Exercicio4 from './paginas/Exercicio4/Exercicio4.jsx'
import './App.css'

const PAGINAS_TREINAMENTO = [
  { id: 'inicio', titulo: 'Inicio', componente: Inicio },
  { id: 'exercicio-1', titulo: 'Exercicio 1', componente: Exercicio1 },
  { id: 'exercicio-2', titulo: 'Exercicio 2', componente: Exercicio2 },
  { id: 'exercicio-3', titulo: 'Exercicio 3', componente: Exercicio3 },
  { id: 'exercicio-4', titulo: 'Exercicio 4', componente: Exercicio4 },
]

function App() {
  const [idPaginaAtiva, setIdPaginaAtiva] = useState(PAGINAS_TREINAMENTO[0].id)

  const ComponentePaginaAtiva = useMemo(() => {
    return (
      PAGINAS_TREINAMENTO.find((pagina) => pagina.id === idPaginaAtiva)
        ?.componente ?? PAGINAS_TREINAMENTO[0].componente
    )
  }, [idPaginaAtiva])

  return (
    <div className="estrutura-aplicacao">
      <Menu
        paginas={PAGINAS_TREINAMENTO}
        idPaginaAtiva={idPaginaAtiva}
        aoNavegar={setIdPaginaAtiva}
      />

      <main id="conteudo-principal" className="conteudo-principal" tabIndex={-1}>
        <ComponentePaginaAtiva />
      </main>
    </div>
  )
}

export default App
