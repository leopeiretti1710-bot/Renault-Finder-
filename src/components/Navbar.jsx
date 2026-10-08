import { Logo } from './Icons.jsx'

const links = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/buscar', texto: 'Buscar Objeto' },
  { ruta: '/perdidos', texto: 'Objetos Perdidos' },
  { ruta: '/encontrados', texto: 'Objetos Encontrado' },
]

export default function Navbar({ path = '/' }) {
  return (
    <header className="navbar">
      <a href="#/" className="navbar__marca">
        <Logo />
        <span>Renault Finder</span>
      </a>
      <nav className="navbar__links">
        {links.map((l) => (
          <a key={l.ruta} href={`#${l.ruta}`} className={path === l.ruta ? 'activo' : ''} aria-current={path === l.ruta ? 'page' : undefined}>{l.texto}</a>
        ))}
      </nav>
    </header>
  )
}
