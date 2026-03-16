import { useState } from "react";
import { DTPFeedbackType, DTPInput } from "../../componentes/ds";
import "./Exercicio3.css";

function Exercicio3() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");

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

      <section
        className="painel-cadastro"
        aria-labelledby="titulo-painel-cadastro"
      >
        <h3 id="titulo-painel-cadastro">Alterar dados de cadastro</h3>
        <p>Preencha os campos abaixo para atualizar as informacoes.</p>

        <div className="formulario-cadastro">
          <div className="formulario-cadastro__campo formulario-cadastro__campo-completo">
            <DTPInput
              id="nome-completo"
              name="nomeCompleto"
              label="Nome completo"
              placeholder="Digite seu nome completo"
              value={nomeCompleto}
              onChange={(event) => setNomeCompleto(event.target.value)}
              required
            />
          </div>

          <div className="formulario-cadastro__campo">
            <DTPInput
              id="email"
              name="email"
              label="E-mail"
              type="email"
              placeholder="seu.email@provedor.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              icon="fa-envelope"
            />
          </div>

          <div className="formulario-cadastro__campo">
            <DTPInput
              id="senha"
              name="senha"
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              icon="fa-lock"
            />
          </div>

          <div className="formulario-cadastro__campo">
            <DTPInput
              id="idade"
              name="idade"
              label="Idade"
              type="number"
              placeholder="00"
              value={idade}
              onChange={(event) => setIdade(event.target.value)}
              inputMode="numeric"
              min={0}
              max={120}
            />
          </div>

          <div className="formulario-cadastro__campo">
            <DTPInput
              id="telefone"
              name="telefone"
              label="Telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              isInvalid={telefone.length > 0 && telefone.length < 14}
              feedbackMessage="Informe um número de celular válido."
              icon="fa-phone"
            />
          </div>

          <div className="formulario-cadastro__campo">
            <DTPInput
              id="cep"
              name="cep"
              label="CEP"
              placeholder="00000-000"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
              inputMode="numeric"
              feedback={DTPFeedbackType.INFO}
              feedbackMessage="Use o formato 00000-000."
            />
          </div>

          <div className="formulario-cadastro__campo">
            <DTPInput
              id="numero"
              name="numero"
              label="Numero"
              type="number"
              placeholder="123"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
              inputMode="numeric"
              min={0}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Exercicio3;
