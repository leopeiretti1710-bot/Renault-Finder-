import ObjetoCard from './ObjetoCard.jsx'

export default function Avisos({ objetos }) {
  return (
    <section className="panel avisos">
      <h2 className="panel__titulo">Avisos Recientes</h2>
      <div className="avisos__grid">
        {objetos.map((o, i) => <ObjetoCard key={o.id} obj={o} i={i} />)}
      </div>
    </section>
  )
}
