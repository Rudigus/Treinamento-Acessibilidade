import "./Exercicio3.css";
import { useState } from "react";
import { DTPInput, DTPFeedbackType } from "../../componentes/ds";

function Exercicio3() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

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
          marginTop: "20px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Alterar cadastro</span>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "500px" }}>
        <DTPInput
          id="nome"
          name="nome"
          label="Nome completo"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <div style={{ height: "16px" }} />

        <DTPInput
          id="cpf"
          name="NUMERIC"
          label="NUMERIC"
          placeholder="000.000.000-00"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          icon="fa-id-card"
          inputMode="numeric"
        />

        <div style={{ height: "16px" }} />

        <DTPInput
          id="email"
          name="email"
          label="Email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="fa-envelope"
          maxLength={4}
          type="text"
        />

        <div style={{ height: "16px" }} />

        <DTPInput
          id="teste"
          label="Teste"
          type="password"
          placeholder="teste"
        />

        <DTPInput id="teste" label="Teste" required placeholder="teste" />
      </div>
    </section>
  );
}

export default Exercicio3;
