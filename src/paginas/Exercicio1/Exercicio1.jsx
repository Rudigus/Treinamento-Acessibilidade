import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Exercicio1.css'
 import { ITENS_DOWNLOAD_MOCK } from './mock/registrosMock.js'
import BrButton from '../../dsgov/BrButton.jsx'

function Exercicio1() {
  const navigate = useNavigate()
  const [idSelecionado, setIdSelecionado] = useState(null)
  const voltarParaInicio = () => {
    navigate('/')
  }

  return (
    <section className="pagina-exercicio-1" aria-labelledby="titulo-exercicio-1">
      <h2 id="titulo-exercicio-1">Central de downloads de documentos</h2>
      <span className="subtitulo-pagina">
        É o serviço para consultar e baixar documentos disponíveis no sistema.
        Escolha um item na lista para iniciar o download.
      </span>

      <div className="painel-crud">
        <div className="filtros-rapidos">
          <input type="text" placeholder="Buscar por nome, tipo ou formato" />
        </div>

        <section aria-label="Lista de itens para download">
          <h4 className="titulo-secao">Itens disponíveis</h4>
          <ul className="lista-registros">
            {ITENS_DOWNLOAD_MOCK.map((item) => {
              const estaSelecionado = item.id === idSelecionado

              return (
                <li key={item.id}>
                  <article
                    id="card-registro"
                    className={`card-registro${estaSelecionado ? ' esta-selecionado' : ''}`}
                  >
                    <h4 className="card-registro__nome">{item.nome}</h4>
                    <p className="texto-secundario">
                      <strong>Tipo:</strong> {item.tipo}
                    </p>
                    <p className="texto-secundario">
                      <strong>Formato:</strong> {item.formato} ({item.tamanho})
                    </p>
                    <div
                      role="button"
                      tabIndex={0}
                      aria-hidden="true"
                      className="botao-detalhar"
                      aria-pressed={estaSelecionado}
                      onClick={() => setIdSelecionado(item.id)}
                    >
                      <i className="fas fa-download" aria-hidden="true" />
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      <div className="acoes-finais">
        <BrButton className="primary medium" onClick={voltarParaInicio}>
          Voltar
        </BrButton>
      </div>
    </section>
  )
}

export default Exercicio1
