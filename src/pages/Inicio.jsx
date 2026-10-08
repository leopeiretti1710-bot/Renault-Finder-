import Hero from '../components/Hero.jsx'
import Categorias from '../components/Categorias.jsx'
import Avisos from '../components/Avisos.jsx'

export default function Inicio({ objetos, onReportar }) {
  return (
    <>
      <Hero onReportar={onReportar} />
      <Categorias />
      <Avisos objetos={objetos.slice(0, 3)} />
    </>
  )
}
