const img = (src, alt, w) => (props) => (
  <img src={`/img/${src}.png`} alt={alt} className="icono-img" style={{ width: w }} draggable="false" {...props} />
)

export const Logo = () => <img src="/img/logo.png" alt="Logo Renault Finder" className="logo-svg" width="64" height="62" draggable="false" />

export const Lupa = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0b1f6b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.5" cy="10.5" r="6.5" /><path d="M16 16l5 5" />
  </svg>
)

export const MochilaBtn = img('mochila-btn', 'Mochila', 50)
export const CuadernoBtn = img('cuaderno-btn', 'Cuaderno', 58)
export const Mochila = img('mochilas', 'Mochilas', 82)
export const Laptop = img('tecnologia', 'Tecnología', 103)
export const Herramientas = img('taller', 'Taller', 67)
export const Ropa = img('ropa', 'Ropa', 81)
export const Utiles = img('utiles', 'Útiles', 94)
