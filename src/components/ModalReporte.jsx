import { useEffect, useState } from 'react'
import { NOMBRES_CAT } from '../data/objetos.js'

export default function ModalReporte({ tipo, onCerrar, onGuardar }) {
  const perdido = tipo === 'perdido'
  const [f, setF] = useState({ titulo: '', cat: 'Mochilas', lugar: '', desc: '' })
  const [foto, setFoto] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // Reduce la foto a máx. 900px para que sea liviana
  const elegirFoto = (e) => {
    const archivo = e.target.files?.[0]
    if (!archivo || !archivo.type.startsWith('image/')) return
    const url = URL.createObjectURL(archivo)
    const im = new Image()
    im.onload = () => {
      const k = Math.min(1, 900 / Math.max(im.width, im.height))
      const c = document.createElement('canvas')
      c.width = Math.round(im.width * k); c.height = Math.round(im.height * k)
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height)
      setFoto(c.toDataURL('image/jpeg', 0.85))
      URL.revokeObjectURL(url)
    }
    im.src = url
    e.target.value = ''
  }

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onCerrar()
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onCerrar])

  const enviar = (e) => {
    e.preventDefault()
    onGuardar({
      id: Date.now(), tipo, ...f, img: foto || undefined,
      fecha: new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }).replace(' de ', ' de ').replace(/ de (\d{4})$/, ', $1'),
    })
  }

  return (
    <div className="modal-fondo" onClick={onCerrar}>
      <form className={`modal modal--${tipo}`} onClick={(e) => e.stopPropagation()} onSubmit={enviar}>
        <button type="button" className="modal__x" onClick={onCerrar} aria-label="Cerrar">×</button>
        <h2>{perdido ? 'Reportar Objeto Perdido' : 'Reportar Objeto Encontrado'}</h2>
        <label>Nombre del objeto<input required value={f.titulo} onChange={set('titulo')} placeholder="Ej: Mochila azul" /></label>
        <label>Categoría
          <select value={f.cat} onChange={set('cat')}>{NOMBRES_CAT.map((c) => <option key={c}>{c}</option>)}</select>
        </label>
        <label>{perdido ? '¿Dónde lo perdiste?' : '¿Dónde lo encontraste?'}
          <input required value={f.lugar} onChange={set('lugar')} placeholder="Ej: Biblioteca" />
        </label>
        <label>Detalles (opcional)<textarea rows="3" value={f.desc} onChange={set('desc')} placeholder="Color, marca, señas particulares…" /></label>
        <div className="foto">
          <span>Foto del objeto (opcional)</span>
          {foto ? (
            <div className="foto__preview">
              <img src={foto} alt="Vista previa del objeto" />
              <button type="button" onClick={() => setFoto('')}>Quitar foto</button>
            </div>
          ) : (
            <label className="foto__caja">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
              <b>Agregar foto</b>
              <small>Toca para sacar o elegir una imagen</small>
              <input type="file" accept="image/*" onChange={elegirFoto} hidden />
            </label>
          )}
        </div>
        <button type="submit" className="modal__enviar">Publicar aviso</button>
      </form>
    </div>
  )
}
