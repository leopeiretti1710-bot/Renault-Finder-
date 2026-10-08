import { Mochila, Laptop, Herramientas, Ropa, Utiles } from './Icons.jsx'
import { CAT, MENU_CAT } from '../data/objetos.js'

const iconos = { Mochilas: <Mochila />, Tecnología: <Laptop />, Taller: <Herramientas />, Ropa: <Ropa />, Útiles: <Utiles /> }

export default function Categorias() {
  return (
    <section className="panel categorias">
      <h2 className="panel__titulo categorias__titulo">Categorias</h2>
      <ul className="categorias__lista">
        {MENU_CAT.map((nombre, i) => (
          <li key={nombre} style={{ '--i': i }}>
            <a className="categoria" href={`#/buscar?cat=${encodeURIComponent(nombre)}`}>
              <span className="categoria__icono" style={{ background: CAT[nombre].tile }}>{iconos[nombre]}</span>
              <span className="categoria__nombre">{nombre}</span>
            </a>
          </li>
        ))}
      </ul>
      <a className="ver-todas" href="#/buscar">Ver todas <span aria-hidden="true">&gt;</span></a>
    </section>
  )
}
