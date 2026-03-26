// Teste Pull Request

import { useState } from "react";
import { DTPFeedbackType, DTPInput } from "../../componentes/ds";
import "./Exercicio3.css";
import "./dadosTitular.css";
import BrButton from "../../dsgov/BrButton";
import { useNavigate } from "react-router-dom";

function Exercicio3() {
  const navigate = useNavigate();
  const [enderecoCompleto, setEnderecoCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");

  const voltarParaInicio = () => {
    navigate("/");
  };
  return (
    <section
      className="pagina-exercicio-3"
      aria-labelledby="titulo-exercicio-3"
    >
      <h2 id="titulo-exercicio-3">Formulario de atualizacao de cadastro</h2>
      <span className="subtitulo-pagina">
        Esta tela simula um formulario com campos de entrada e selecao para
        revisar informacoes cadastrais e praticar ajustes de acessibilidade.
      </span>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px 20px",
          borderBottom: "1px solid #e0e0e0",
          color: "#2162adff",
          fontSize: "16px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50px",
          width: "100%",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Alterar cadastro</span>
      </div>
      <section
        className="painel-cadastro"
        aria-labelledby="titulo-painel-cadastro"
      >
        <h3 className="sag-va-titulo-linha">Informações do Titular</h3>
        <div className="sag-va-campos">
          <div className="sag-va-campo">
            <label>cpf: </label>
            <span>380.124.997-20</span>
          </div>
          <div className="sag-va-campo">
            <label>Nome: </label>
            <span>ADILSON GOMES DA ROCHA</span>
          </div>
          <div className="sag-va-campo">
            <label>Data nascimento: </label>
            <span>01/01/1990</span>
          </div>
        </div>
        <h3 className="sag-va-titulo-linha">Informações de Contato</h3>

        <div className="formulario-cadastro">
          <div className="formulario-cadastro__campo formulario-cadastro__campo-completo">
            <DTPInput
              id="endereco-completo"
              name="enderecoCompleto"
              label="Endereço"
              placeholder="Informe seu endereço"
              value={enderecoCompleto}
              onChange={(event) => setEnderecoCompleto(event.target.value)}
            />
          </div>

          <div className="formulario-cadastro__campo">
            <DTPInput
              id="email"
              name="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              isInvalid={
                email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              }
            />
          </div>
          <div className="formulario-cadastro__campo">
            <DTPInput
              id="celular"
              name="celular"
              label="Celular (Opcional)"
              type="tel"
              placeholder="(00) 00000-0000"
              value={celular}
              onChange={(event) => setCelular(event.target.value)}
              isInvalid={celular.length > 0 && celular.length < 14}
              feedbackMessage="Informe um número de celular válido."
              icon="fa-mobile-alt"
            />
          </div>
        </div>

        <div className="acoes-finais">
          <BrButton className="secondary large" onClick={voltarParaInicio}>
            Voltar
          </BrButton>
          <BrButton className="primary large" onClick={voltarParaInicio}>
            Avançar
          </BrButton>
        </div>
      </section>
    </section>
  );
}

export default Exercicio3;
