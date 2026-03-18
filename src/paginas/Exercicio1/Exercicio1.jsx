import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Exercicio1.css";
import { ITENS_DOWNLOAD_MOCK } from "./mock/registrosMock.js";
import BrButton from "../../dsgov/BrButton.jsx";
import downloadTextFile from "../../utils/downloadFile.js";

function Exercicio1() {
  const navigate = useNavigate();
  const [idSelecionado, setIdSelecionado] = useState(null);

  const handleDetalhar = (item) => {
    setIdSelecionado(item.id);
    downloadTextFile("Simulacao de PDF", `${item.nome || "documento"}.txt`);
  };

  const voltarParaInicio = () => {
    navigate("/");
  };

  return (
    <section
      className="pagina-exercicio-1"
      aria-labelledby="titulo-exercicio-1"
    >
      <h2 id="titulo-exercicio-1">Central de downloads de documentos</h2>
      <span className="subtitulo-pagina">
        É o serviço para consultar e baixar documentos disponíveis no sistema.
        Escolha um item na lista para iniciar o download.
      </span>

      <div className="painel-crud">
        <section aria-label="Lista de itens para download">
          <h3 className="titulo-secao">Itens disponíveis</h3>
          <ul className="lista-registros">
            {ITENS_DOWNLOAD_MOCK.map((item) => {
              const estaSelecionado = item.id === idSelecionado;

              return (
                <li key={item.id}>
                  <article
                    id="card-registro"
                    className={`card-registro${estaSelecionado ? " esta-selecionado" : ""}`}
                  >
                    <h4 className="card-registro__nome">{item.nome}</h4>
                    <p className="texto-secundario">
                      <strong>Tipo:</strong> {item.tipo}
                    </p>
                    <p className="texto-secundario">
                      <strong>Formato:</strong> {item.formato} ({item.tamanho})
                    </p>
                    {/*
                        onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleDetalhar(item);
                        }
                    }} */}
                    <div
                      role="button"
                      className="botao-detalhar"
                      onClick={() => handleDetalhar(item)}
                    >
                      <i className="fas fa-cloud-download-alt" />
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <div className="acoes-finais">
        {/* Large -> altura de 48px */}
        <BrButton className="primary medium" onClick={voltarParaInicio}>
          Voltar
        </BrButton>
      </div>
    </section>
  );
}

export default Exercicio1;
