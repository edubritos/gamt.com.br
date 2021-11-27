import Grupamento from './Grupamento'
import Manejo from './Manejo'
import Turismo from './Turismo'
import Contato from './Contato'
import Footer from './Footer'
import Header from './Header'
import Brigada from './Brigada'

const Main = () => (
  <div id="main" >
    <Header />

    <div id="container">
      <i id="navGrupamento" />
      <Grupamento />
      <i id="navBrigada" />
      <Brigada />
      <i id="navManejo" />
      <Manejo />
      <i id="navTurismo" />
      <Turismo />
      <i id="navContato" />
      <Contato />
    </div>
    <Footer />
  </div>
)


export default Main