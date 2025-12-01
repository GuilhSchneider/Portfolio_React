import projetoFormula1 from "../assets/imagens/projetoFormula1.png"
import projetoChat from "../assets/imagens/projetoChat.png"
import projetoPortFolioJogos from "../assets/imagens/projetoPortFolioJogos.png"

import RepositórioGithub from "../assets/icons/github.png"
import siteOlho from "../assets/icons/siteOlho.png"

export default function Projetos() {
  return (
    <section id="projetos" className="section">
      <h2 className="section-title">Projetos</h2>

      <div className="projects-grid">

        {/* Projeto 1 */}
        <div className="project-card">
          <img src={projetoFormula1} alt="Brasilidades Fórmula 1" />
          <h3>Brasilidades Fórmula 1</h3>
          <p>
            Site criado durante o curso apresentando pilotos brasileiros da Fórmula 1.
            Desenvolvido com foco em acessibilidade, permitindo navegação completa usando TAB.
          </p>

          <div className="project-overlay">
            <a
              href="https://github.com/GuilhSchneider/Brasilidades-Formula1"
              title="Visitar o Repositório"
              target="_blank"
              className="project-item"
              aria-label="Repositório"
            >
              <img src={RepositórioGithub} alt="Visitar Repositório" />
            </a>

            <a
              href="https://guilhschneider.github.io/Brasilidades-Formula1/"
              title="Visitar o Projeto"
              target="_blank"
              className="project-item"
              aria-label="Site"
            >
              <img src={siteOlho} alt="Visitar Site" />
            </a>
          </div>

        </div>

        <div className="project-card">
          <img src={projetoChat} alt="ChatFake" />
          <h3>ChatFake</h3>
          <p>
            Aplicação de chat em tempo real hospedada no Render, com código disponível no GitHub.
            Permite conversar com usuários conectados e mantém tudo leve ao não salvar mensagens antigas.
          </p>

          <div className="project-overlay">
            <a
              href="https://github.com/GuilhSchneider/CHAT-FAKE---ChatGPT"
              title="Visitar o Repositório"
              target="_blank"
              className="project-item"
              aria-label="Repositório"
            >
              <img src={RepositórioGithub} alt="Visitar Repositório" />
            </a>

            <a
              href="https://chat-fake-chatgpt-dslu.onrender.com/"
              title="Visitar o Projeto"
              target="_blank"
              className="project-item"
              aria-label="Site"
            >
              <img src={siteOlho} alt="Visitar Site" />
            </a>
          </div>

        </div>

        <div className="project-card">
          <img src={projetoPortFolioJogos} alt="Portfólio de Jogos" />
          <h3>Portfólio de Jogos</h3>
          <p>
            Portfólio desenvolvido em parceria, reunindo vários mini-games criados por nós.
            Inclui Jogo da Velha, Troca Palavras, Forca e o Clique Bolinha, inspirado em treinos de precisão.
          </p>


          <div className="project-overlay">
            <a
              href="https://github.com/GuilhSchneider/Portifolio-jogos"
              title="Visitar o Repositório"
              target="_blank"
              className="project-item"
              aria-label="Repositório"
            >
              <img src={RepositórioGithub} alt="Visitar Repositório" />
            </a>

            <a
              href="https://felipegsg.github.io/Portifolio-jogos/"
              title="Visitar o Projeto"
              target="_blank"
              className="project-item"
              aria-label="Site"
            >
              <img src={siteOlho} alt="Visitar Site" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
