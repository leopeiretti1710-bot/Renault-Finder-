import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import ModalReporte from './components/ModalReporte.jsx'
import Inicio from './pages/Inicio.jsx'
import Buscar from './pages/Buscar.jsx'
import Listado from './pages/Listado.jsx'
import useRuta, { navegar } from './hooks/useRuta.js'
import { OBJETOS_INICIALES } from './data/objetos.js'

export default function App() {
  const { path, params } = useRuta()
  const [objetos, setObjetos] = useState(OBJETOS_INICIALES)
  const [modal, setModal] = useState(null) // 'perdido' | 'encontrado' | null

  const guardar = (nuevo) => {
    setObjetos([nuevo, ...objetos])
    setModal(null)
    navegar(nuevo.tipo === 'perdido' ? '/perdidos' : '/encontrados')
  }

  let pagina
  if (path === '/buscar') pagina = <Buscar key={JSON.stringify(params)} objetos={objetos} params={params} />
  else if (path === '/perdidos') pagina = <Listado key="p" tipo="perdido" objetos={objetos} onReportar={setModal} />
  else if (path === '/encontrados') pagina = <Listado key="e" tipo="encontrado" objetos={objetos} onReportar={setModal} />
  else pagina = <Inicio objetos={objetos} onReportar={setModal} />

  return (
    <div className="app">
      <Navbar path={path} />
      <main className="contenedor">{pagina}</main>
      {modal && <ModalReporte tipo={modal} onCerrar={() => setModal(null)} onGuardar={guardar} />}
    </div>
  )
}
