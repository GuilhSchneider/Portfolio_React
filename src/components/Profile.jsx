import profileIcon from "../assets/profileIcon.png"
import fundo from "../assets/imagens/fundo.png"

export default function Profile() {
  return (
    <section id="profile" className="profile">

      <div id="profileText">
        <img
          src={fundo}
          alt="Fundo"
        />
        <div id="textsProfile">
          <p>HELLO WORLD 👋</p>
          <h4>Eu sou Guilherme Schneider</h4>
          <a href="#profileInfo">Saiba mais sobre mim</a>
        </div>
      </div>

      <div id="profileInfo">
        <img
          src={profileIcon}
          className="profile-img"
          alt="Foto de perfil"
        />

        <div className="divAbout">
          <h1 className="profile-about">Sobre mim</h1>

          <p className="profile-desc">
            Olá! Meu nome é Guilherme Henrique Schneider e sou estudante de Desenvolvimento de Sistemas no Senai Nami Jafet.
            Tenho paixão por criar interfaces modernas e funcionais, sempre focando na experiência do usuário.
            Estou em busca de novos desafios que me permitam evoluir tecnicamente e contribuir com soluções inovadoras em projetos de tecnologia.
          </p>
        </div>

      </div>
    </section>
  )
}
