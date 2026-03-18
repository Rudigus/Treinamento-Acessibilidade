import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BrButton from '../../dsgov/BrButton.jsx'
import './Exercicio2.css'
import { SECOES_MOCK } from './mock/secoesMock.js'

function Exercicio2() {
    const navigate = useNavigate()
    const primeiroSubitemRef = useRef({})
    const montouRef = useRef(false)
    const secoes = SECOES_MOCK

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

    useEffect(() => {
        if (!montouRef.current) {
            montouRef.current = true
            return
        }

        if (!dropdownAberto) {
            return
        }

        const primeiroSubitem = primeiroSubitemRef.current[dropdownAberto]
        if (primeiroSubitem) {
            primeiroSubitem.focus()
        }
    }, [dropdownAberto])

    const alternarDropdown = (secaoId) => {
        setDropdownAberto((atual) => (atual === secaoId ? '' : secaoId))
    }

    const selecionarItem = (itemId) => {
        setItemAtivo(itemId)
    }

    const selecionarSecaoPorLink = (event, secaoId) => {
        event.preventDefault()
        selecionarItem(secaoId)
    }

    const dadosItemAtivo =
        itensNavegaveis.find((item) => item.id === itemAtivo) ?? itensNavegaveis[0]

    const voltarParaInicio = () => {
        navigate('/')
    }

    const renderLinkSecao = (secao) => {
        return (
            <a
                href="#"
                className="menu-lateral-erro__botao"
                onClick={(event) => selecionarSecaoPorLink(event, secao.id)}
            >
                <span>{secao.titulo}</span>
            </a>
        )
    }

    const renderBotaoDropdown = (secao, estaAberto) => {
        return (
            <button
                type="button"
                className={`menu-lateral-erro__botao menu-lateral-erro__botao-dropdown${estaAberto ? ' esta-ativo' : ''
                    }`}
                onClick={() => alternarDropdown(secao.id)}
                aria-expanded={estaAberto}
                aria-controls={`sublista-${secao.id}`}
            >
                <span>{secao.titulo}</span>
                <i
                    className={`fas ${estaAberto ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    aria-hidden="true"
                />
            </button>
        )
    }

    const renderSubitens = (secao, estaAberto) => {
        if (!estaAberto) {
            return null
        }

        return (
            <ul
                id={`sublista-${secao.id}`}
                className="menu-lateral-erro__sublista"
                aria-label={`Submenu de ${secao.titulo}`}
            >
                {secao.itens.map((item, indiceSubitem) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            className="menu-lateral-erro__botao menu-lateral-erro__botao-item"
                            onClick={() => selecionarItem(item.id)}
                            ref={indiceSubitem === 0 ? (elemento) => {
                                primeiroSubitemRef.current[secao.id] = elemento
                            } : null}
                        >
                            {item.titulo}
                        </button>
                    </li>
                ))}
            </ul>
        )
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
                <nav className="menu-lateral-erro" aria-label="Menu lateral de seções">
                    <h3>Seções disponíveis</h3>

                    <ul className="menu-lateral-erro__lista">
                        {secoes.map((secao) => {
                            const hasSubItem = Array.isArray(secao.itens) && secao.itens.length > 0
                            const estaAberto = secao.id === dropdownAberto

                            if (!hasSubItem) {
                                return (
                                    <li key={secao.id}>
                                        {renderLinkSecao(secao)}
                                    </li>
                                )
                            }

                            return (
                                <li key={secao.id}>
                                    {renderBotaoDropdown(secao, estaAberto)}
                                    {renderSubitens(secao, estaAberto)}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <article className="conteudo-secao">
                    <>
                        <h3>{dadosItemAtivo.titulo}</h3>
                        <p>{dadosItemAtivo.descricao}</p>
                    </>
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
