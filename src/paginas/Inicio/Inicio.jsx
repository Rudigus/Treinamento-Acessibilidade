import './Inicio.css'

function Inicio() {
  return (
    <section className="pagina-inicio" aria-labelledby="titulo-inicio">
      <h2 id="titulo-inicio">Treinamento de Acessibilidade Dataprev</h2>
      <div className="blocos-texto-inicio">
        <span className="subtitulo-pagina">
          Este é um ambiente de treinamento para analisar a acessibilidade em
          páginas da web.
        </span>
        <p>
          Aqui vamos encontrar problemas de navegação, leitura e uso em
          diferentes telas e praticar formas de melhorar a acessibilidade dos
          sistemas.
        </p>
        <p>
          As telas deste site têm problemas de acessibilidade inseridos de
          propósito. Esses problemas devem ser encontrados e corrigidos no
          código durante os exercícios.
        </p>
      </div>
    </section>
  )
}

export default Inicio
