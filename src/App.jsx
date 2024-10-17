import './App.css'
import brasCubasImg from './assets/bras_cubas.jpeg'
import Capa from './capa'

function App() {

  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas',
  }

  return (
    <>
    <Capa imagemCapa={informacoesLivro.capa} textoAlternativo={informacoesLivro.textoAlternativo} />
    </>
  )
}

export default App
