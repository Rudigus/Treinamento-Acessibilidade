import { useState } from 'react'
import './Exercicio1.css'
import { REGISTROS_MOCK } from './mock/registrosMock.js'

function Exercicio1() {
  const [idSelecionado, setIdSelecionado] = useState(null)

  return (
    <section className="pagina-exercicio-1" aria-labelledby="titulo-exercicio-1">
      <h2 id="titulo-exercicio-1">Atualização de dados cadastrais</h2>
      <span className="subtitulo-pagina">
        É o serviço para consultar e atualizar dados cadastrais. Escolha um
        registro na lista para ver mais detalhes e editar as informações.
      </span>

      <div className="painel-crud">
        <section aria-label="Lista de registros">
          <h3 className="titulo-secao">Registros</h3>
          <ul className="lista-registros">
            {REGISTROS_MOCK.map((registro) => {
              const estaSelecionado = registro.id === idSelecionado

              return (
                <li key={registro.id}>
                  <article className={`card-registro${estaSelecionado ? ' esta-selecionado' : ''}`}>
                    <h4 className="card-registro__nome">{registro.nome}</h4>
                    <p>
                      <strong>CPF:</strong> {registro.cpf}
                    </p>
                    <p>
                      <strong>Email:</strong> {registro.email}
                    </p>
                    <button
                      type="button"
                      className="botao-detalhar"
                      aria-pressed={estaSelecionado}
                      onClick={() => setIdSelecionado(registro.id)}
                    >
                      Detalhar
                    </button>
                  </article>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default Exercicio1
