import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BrButton from '../../dsgov/BrButton.jsx'
import './Exercicio2.css'

function Exercicio2() {
  const navigate = useNavigate()

  const secoes = useMemo(() => {
    return [
      {
        id: 'dados-pessoais',
        titulo: 'Dados pessoais',
        descricao:
          'Área com informações básicas do cidadão, incluindo nome social, documento e dados de contato.',
      },
      {
        id: 'endereco',
        titulo: 'Endereço',
        itens: [
          {
            id: 'residencial',
            titulo: 'Residencial',
            descricao:
              'Área com os endereços cadastrados para correspondência e confirmação de localidade.',
          },
          {
            id: 'comercial',
            titulo: 'Comercial',
            descricao: 'Área com endereço de trabalho e referências para contato institucional.',
          },
        ],
      },
      {
        id: 'contatos',
        titulo: 'Contatos',
        descricao:
          'Área com telefones e e-mails usados para notificações do serviço, autenticação e comunicação.',
      },
      {
        id: 'documentos',
        titulo: 'Documentos',
        itens: [
          {
            id: 'obrigatorios',
            titulo: 'Obrigatórios',
            descricao:
              'Área para consulta e atualização dos documentos obrigatórios e anexos enviados.',
          },
          {
            id: 'complementares',
            titulo: 'Complementares',
            descricao:
              'Área para anexos adicionais solicitados em fluxos específicos de atualização cadastral.',
          },
        ],
      },
    ]
  }, [])

  const primeiroDropdown =
    secoes.find((secao) => Array.isArray(secao.itens) && secao.itens.length > 0)?.id ?? ''

  const itensNavegaveis = secoes.flatMap((secao) => {
    if (Array.isArray(secao.itens) && secao.itens.length > 0) {
      return secao.itens
    }

    return [
      {
        id: secao.id,
        titulo: secao.titulo,
        descricao: secao.descricao,
      },
    ]
  })

  const [dropdownAberto, setDropdownAberto] = useState(primeiroDropdown)
  const [itemAtivo, setItemAtivo] = useState(itensNavegaveis[0]?.id ?? '')

  const alternarDropdown = (secaoId) => {
    setDropdownAberto((atual) => (atual === secaoId ? '' : secaoId))
  }

  const dadosItemAtivo =
    itensNavegaveis.find((item) => item.id === itemAtivo) ?? itensNavegaveis[0]

  const voltarParaInicio = () => {
    navigate('/')
  }

  return (
    <section className="pagina-exercicio-2" aria-labelledby="titulo-exercicio-2">
      <h2 id="titulo-exercicio-2">Navegação entre áreas do cadastro</h2>
      <span className="subtitulo-pagina">
        Esta tela simula uma navegação lateral com erros propositais de acessibilidade.
        O objetivo é revisar a estrutura de navegação, incluindo botões de dropdown sem
        atributos de estado apropriados.
      </span>

      <div className="painel-navegacao-erro">
        <div className="menu-lateral-erro" aria-label="Menu lateral de seções">
          <h3>Seções disponíveis</h3>

          <ul className="menu-lateral-erro__lista">
            {secoes.map((secao) => {
              const temSubitens = Array.isArray(secao.itens) && secao.itens.length > 0
              const estaAberto = secao.id === dropdownAberto

              if (!temSubitens) {
                const itemEstaAtivo = secao.id === itemAtivo

                return (
                  <li key={secao.id}>
                    <button
                      type="button"
                      className={`menu-lateral-erro__botao${itemEstaAtivo ? ' esta-ativo' : ''}`}
                      onClick={() => setItemAtivo(secao.id)}
                    >
                      <span>{secao.titulo}</span>
                    </button>
                  </li>
                )
              }

              return (
                <li key={secao.id}>
                  <button
                    type="button"
                    className={`menu-lateral-erro__botao menu-lateral-erro__botao-dropdown${
                      estaAberto ? ' esta-ativo' : ''
                    }`}
                    onClick={() => alternarDropdown(secao.id)}
                  >
                    <span>{secao.titulo}</span>
                    <i
                      className={`fas ${estaAberto ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                      aria-hidden="true"
                    />
                  </button>

                  {estaAberto && (
                    <ul className="menu-lateral-erro__sublista">
                      {secao.itens.map((item) => {
                        const itemEstaAtivo = item.id === itemAtivo

                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              className={`menu-lateral-erro__botao menu-lateral-erro__botao-item${
                                itemEstaAtivo ? ' esta-ativo' : ''
                              }`}
                              onClick={() => setItemAtivo(item.id)}
                            >
                              {item.titulo}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <article className="conteudo-secao">
          <h3>{dadosItemAtivo.titulo}</h3>
          <p>{dadosItemAtivo.descricao}</p>
          <p>
            Em uma versão acessível, esta navegação deve ser convertida para uma estrutura semântica
            adequada, com landmarks e links, além de estados corretos para botões expansíveis.
          </p>
        </article>
      </div>

      <div className="acoes-finais">
        <BrButton className="primary large" onClick={voltarParaInicio}>
          Voltar
        </BrButton>
      </div>
    </section>
  )
}

export default Exercicio2
