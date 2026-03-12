import "./Exercicio3.css";

function Exercicio3() {
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
    </section>
  );
}

export default Exercicio3;
