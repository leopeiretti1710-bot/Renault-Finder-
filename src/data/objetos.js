// Colores y datos por categoría
export const CAT = {
  Mochilas:   { fondo: '#cfe3fb', etiqueta: '#6a9bc9', texto: '#fff', tile: '#6a9bc9', icono: 'mochilas' },
  Tecnología: { fondo: '#fab4d8', etiqueta: '#6fc3f7', texto: '#fff', tile: '#d8bdf7', icono: 'tecnologia' },
  Taller:     { fondo: '#fbe3cc', etiqueta: '#e8803a', texto: '#fff', tile: '#f9b0b0', icono: 'taller' },
  Ropa:       { fondo: '#e6d5fa', etiqueta: '#8a4fd8', texto: '#fff', tile: '#fbf6b8', icono: 'ropa' },
  Útiles:     { fondo: '#f9b4b0', etiqueta: '#fbc11a', texto: '#0b1f6b', tile: '#f9b0d8', icono: 'utiles' },
  Otros:      { fondo: '#f9f6b8', etiqueta: '#4a0fcf', texto: '#fff', tile: '#f9f6b8', icono: null },
}
export const NOMBRES_CAT = Object.keys(CAT)
export const MENU_CAT = ['Mochilas', 'Tecnología', 'Taller', 'Ropa', 'Útiles']

export const OBJETOS_INICIALES = [
  { id: 1, tipo: 'encontrado', titulo: 'Audífonos inalámbricos', lugar: 'Biblioteca', fecha: '19 de mayo, 2024', cat: 'Tecnología', img: '/img/audifonos.jpg' },
  { id: 2, tipo: 'perdido', titulo: 'Estuche con útiles', lugar: 'Aula 203', fecha: '18 de mayo, 2024', cat: 'Útiles', img: '/img/estuche.jpg' },
  { id: 3, tipo: 'encontrado', titulo: 'Botella de agua', lugar: 'Patio principal', fecha: '18 de mayo, 2024', cat: 'Otros', img: '/img/botella.jpg' },
  { id: 4, tipo: 'perdido', titulo: 'Mochila azul con cierre', lugar: 'Cancha de fútbol', fecha: '17 de mayo, 2024', cat: 'Mochilas' },
  { id: 5, tipo: 'perdido', titulo: 'Calculadora científica', lugar: 'Aula 105', fecha: '17 de mayo, 2024', cat: 'Tecnología' },
  { id: 6, tipo: 'encontrado', titulo: 'Campera gris con capucha', lugar: 'Gimnasio', fecha: '16 de mayo, 2024', cat: 'Ropa' },
  { id: 7, tipo: 'encontrado', titulo: 'Llave inglesa pequeña', lugar: 'Taller de mecánica', fecha: '16 de mayo, 2024', cat: 'Taller' },
  { id: 8, tipo: 'encontrado', titulo: 'Cargador de notebook', lugar: 'Laboratorio de informática', fecha: '15 de mayo, 2024', cat: 'Tecnología' },
  { id: 9, tipo: 'perdido', titulo: 'Buzo azul marino', lugar: 'Cantina', fecha: '15 de mayo, 2024', cat: 'Ropa' },
  { id: 10, tipo: 'perdido', titulo: 'Set de reglas y escuadra', lugar: 'Aula 301', fecha: '14 de mayo, 2024', cat: 'Útiles' },
  { id: 11, tipo: 'encontrado', titulo: 'Mochila negra con llavero', lugar: 'Biblioteca', fecha: '14 de mayo, 2024', cat: 'Mochilas' },
  { id: 12, tipo: 'perdido', titulo: 'Destornilladores', lugar: 'Taller de electricidad', fecha: '13 de mayo, 2024', cat: 'Taller' },
]
