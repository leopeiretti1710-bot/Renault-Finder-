import { useMemo, useState } from 'react'
import ObjetoCard from '../components/ObjetoCard.jsx'
import { Lupa } from '../components/Icons.jsx'
import { NOMBRES_CAT } from '../data/objetos.js'

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export default function Buscar({ objetos, params }) {
  const [q, setQ] = useState(params.q ?? '')
  const [cat, setCat] = useState(params.cat ?? '')
  const [tipo, setTipo] = useState('')

  const res = useMemo(() => objetos.filter((o) =>
    (!tipo || o.tipo === tipo) && (!cat || o.cat === cat) &&
    (!q || norm(`${o.titulo} ${o.lugar} ${o.cat} ${o.desc ?? ''}`).includes(norm(q)))
  ), [objetos, q, cat, tipo])

  return (
    <section className="pagina">
      <h1 className="pagina__titulo">Buscar Objeto</h1>
      <p className="pagina__texto">Escribe qué estás buscando o filtra por categoría y tipo de aviso.</p>

      <div className="buscador buscador--pagina">
        <Lupa />
        <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="¿Qué objeto estás buscando?" />
        {q && <button type="button" onClick={() => setQ('')}>Limpiar</button>}
      </div>

      <div className="filtros">
        <div className="chips">
          {[['', 'Todos'], ['perdido', 'Perdidos'], ['encontrado', 'Encontrados']].map(([v, t]) => (
            <button key={t} className={`chip ${tipo === v ? 'chip--on' : ''}`} onClick={() => setTipo(v)}>{t}</button>
          ))}
        </div>
        <div className="chips">
          {['', ...NOMBRES_CAT].map((c) => (
            <button key={c || 'todas'} className={`chip ${cat === c ? 'chip--on' : ''}`} onClick={() => setCat(c)}>{c || 'Todas las categorías'}</button>
          ))}
        </div>
      </div>

      <section className="panel avisos avisos--pagina">
        <h2 className="panel__titulo">{res.length} {res.length === 1 ? 'resultado' : 'resultados'}</h2>
        {res.length ? (
          <div className="avisos__grid avisos__grid--lista">
            {res.map((o, i) => <ObjetoCard key={o.id} obj={o} i={i} mostrarTipo />)}
          </div>
        ) : (
          <p className="vacio">No encontramos nada con esa búsqueda. Prueba con otra palabra o reporta el objeto.</p>
        )}
      </section>
    </section>
  )
}
