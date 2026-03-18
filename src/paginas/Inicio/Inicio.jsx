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

      <section className="links-ajuda" aria-labelledby="titulo-links-ajuda">
        <h3 id="titulo-links-ajuda">Links de ajuda</h3>
        <ul>
          <li>
            <a
              href="https://fontawesome.com/v5/search"
              target="_blank"
              rel="noreferrer noopener"
            >
              Font Awesome v5 Search
            </a>
          </li>
          <li>
            <a
              href="https://guia-wcag.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Guia WCAG
            </a>
          </li>
          <li>
            <a href="https://www.gov.br/ds/home" target="_blank" rel="noreferrer noopener">
              DS Gov
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.br/ds/fundamentos-visuais/iconografia?tab=visao-geral"
              target="_blank"
              rel="noreferrer noopener"
            >
              Iconografia DS Gov
            </a>
          </li>
          <li>
            <a
              href="https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp?hl=pt&pli=1"
              target="_blank"
              rel="noreferrer noopener"
            >
              IBM Equal Access Accessibility Checker
            </a>
          </li>

        </ul>
      </section>
    </section>
  )
}

export default Inicio
