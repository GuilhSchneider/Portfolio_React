import "./App.css"

import Header from "./components/Header"
import Profile from "./components/Profile"
import Tecnologias from "./components/Tecnologias"
import Projetos from "./components/Projetos"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Tecnologias />
      <Projetos />
      <Footer />
    </div>
  )
}
