import { useEffect, useRef, useState } from 'react'

const leer = () => {
  const h = window.location.hash.replace(/^#/, '') || '/'
  const [path, qs = ''] = h.split('?')
  return { path: path || '/', params: Object.fromEntries(new URLSearchParams(qs)) }
}

export function navegar(path, params = {}) {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v)).toString()
  window.location.hash = qs ? `${path}?${qs}` : path
}

export default function useRuta() {
  const [ruta, setRuta] = useState(leer)
  const anterior = useRef(ruta.path)
  useEffect(() => {
    const alCambiar = () => {
      const nueva = leer()
      if (nueva.path !== anterior.current) window.scrollTo({ top: 0 })
      anterior.current = nueva.path
      setRuta(nueva)
    }
    window.addEventListener('hashchange', alCambiar)
    return () => window.removeEventListener('hashchange', alCambiar)
  }, [])
  return ruta
}
