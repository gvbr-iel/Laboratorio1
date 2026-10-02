import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

function Perfil() {
  const { usuario: nombreUrl } = useParams<{ usuario: string }>()
  const authContext = useContext(AuthContext)
  const [meGusta, setMeGusta] = useState<number>(0)

  if (!authContext) {
    throw new Error('Perfil debe renderizarse dentro de un AuthProvider')
  }

  const usuarioCoincide = authContext.usuario?.nombre === nombreUrl

  if (!usuarioCoincide) {
    return (
      <main>
        <h1>Perfil no disponible</h1>
        <p>Inicia sesión con el usuario correspondiente para ver este perfil.</p>
        <Link to="/login">Ir a iniciar sesión</Link>
      </main>
    )
  }

  return (
    <main>
      <header>
        <Link to="/">Plataforma</Link>
        <h1>Perfil de Gabriel Jorquera</h1>
      </header>
      <article>
        <p>Integrante del Laboratorio 1</p>
        <h2>Plataforma de práctica con React y TypeScript</h2>
        <p>
          Aplicación web creada con Vite, con rutas para la página principal,
          el inicio de sesión y los perfiles de usuario.
        </p>
        <button type="button" onClick={() => setMeGusta((cantidad) => cantidad + 1)}>
          Me gusta: {meGusta}
        </button>
      </article>
    </main>
  )
}

export default Perfil
