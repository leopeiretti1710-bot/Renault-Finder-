import { useState } from 'react'
import { CAT } from '../data/objetos.js'

export default function ObjetoCard({ obj, i = 0, mostrarTipo = false }) {
  const c = CAT[obj.cat] ?? CAT.Otros
  const [fallo, setFallo] = useState(false)
  const hayFoto = obj.img && !fallo
  return (
    <article className="aviso" style={{ background: c.fondo, '--i': i }}>
      <div className="aviso__foto">
        {hayFoto ? (
          <img src={obj.img} alt={obj.titulo} loading="lazy" onError={() => setFallo(true)} />
        ) : (
          <div className="aviso__placeholder" style={{ background: c.etiqueta + '55' }}>
            {c.icono ? <img src={`/img/${c.icono}.png`} alt="" /> : <span>?</span>}
          </div>
        )}
        <span className="aviso__etiqueta" style={{ background: c.etiqueta, color: c.texto }}>{obj.cat}</span>
        {mostrarTipo && <span className={`aviso__tipo aviso__tipo--${obj.tipo}`}>{obj.tipo === 'perdido' ? 'Perdido' : 'Encontrado'}</span>}
      </div>
      <h3>{obj.titulo}</h3>
      <p>{obj.lugar}</p>
      <p>{obj.fecha}</p>
      {obj.desc && <p className="aviso__desc">{obj.desc}</p>}
    </article>
  )
}
