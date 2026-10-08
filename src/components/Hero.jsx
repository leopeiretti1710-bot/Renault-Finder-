import { useState } from 'react'
import { Lupa, MochilaBtn, CuadernoBtn } from './Icons.jsx'
import { navegar } from '../hooks/useRuta.js'

export default function Hero({ onReportar }) {
  const [q, setQ] = useState('')
  return (
    <section className="hero">
      <h1 className="hero__titulo">Renault Finder</h1>
      <p className="hero__texto">
        Conectamos a estudiantes que perdieron algo con quienes lo<br />
        encontraron. Publica, busca y recupera tus cosas en tu zona.
      </p>

      <form className="buscador" onSubmit={(e) => { e.preventDefault(); navegar('/buscar', { q: q.trim() }) }}>
        <Lupa />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="¿Qué objeto estás buscando?" />
        <button type="submit">Buscar</button>
      </form>

      <div className="reportes">
        <button className="reporte reporte--perdido" onClick={() => onReportar('perdido')}>
          <span className="reporte__icono"><MochilaBtn /></span>
          <span className="reporte__texto">Reportar Objeto Perdido</span>
        </button>
        <button className="reporte reporte--encontrado" onClick={() => onReportar('encontrado')}>
          <span className="reporte__icono"><CuadernoBtn /></span>
          <span className="reporte__texto">Reportar Objeto Encontrado</span>
        </button>
      </div>
    </section>
  )
}
