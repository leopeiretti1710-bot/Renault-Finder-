import { useState } from 'react'
import ObjetoCard from '../components/ObjetoCard.jsx'
import { NOMBRES_CAT } from '../data/objetos.js'

export default function Listado({ tipo, objetos, onReportar }) {
  const perdido = tipo === 'perdido'
  const [cat, setCat] = useState('')
  const lista = objetos.filter((o) => o.tipo === tipo && (!cat || o.cat === cat))

  return (
    <section className="pagina">
      <h1 className="pagina__titulo">{perdido ? 'Objetos Perdidos' : 'Objetos Encontrados'}</h1>
      <p className="pagina__texto">
        {perdido ? 'Estudiantes que están buscando algo. ¿Lo viste? Avísales.' : 'Cosas que alguien encontró y espera devolver a su dueño.'}
      </p>
      <button className={`reporte reporte--${perdido ? 'perdido' : 'encontrado'} reporte--chico`} onClick={() => onReportar(tipo)}>
        <span>{perdido ? 'Reportar Objeto Perdido' : 'Reportar Objeto Encontrado'}</span>
      </button>

      <div className="filtros">
        <div className="chips">
          {['', ...NOMBRES_CAT].map((c) => (
            <button key={c || 'todas'} className={`chip ${cat === c ? 'chip--on' : ''}`} onClick={() => setCat(c)}>{c || 'Todas'}</button>
          ))}
        </div>
      </div>

      <section className="panel avisos avisos--pagina">
        <h2 className="panel__titulo">{lista.length} {lista.length === 1 ? 'aviso' : 'avisos'}</h2>
        {lista.length ? (
          <div className="avisos__grid avisos__grid--lista">
            {lista.map((o, i) => <ObjetoCard key={o.id} obj={o} i={i} />)}
          </div>
        ) : (
          <p className="vacio">Todavía no hay avisos en esta categoría.</p>
        )}
      </section>
    </section>
  )
}
