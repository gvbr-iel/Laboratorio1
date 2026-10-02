import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import './Perfil.css'

function Perfil() {
  const { usuario: nombreUrl } = useParams<{ usuario: string }>()
  const authContext = useContext(AuthContext)
  const [meGusta, setMeGusta] = useState<number>(0)
  const usuarioCoincide = authContext?.usuario?.nombre === nombreUrl

  useEffect(() => {
    if (!nombreUrl || !usuarioCoincide) {
      return
    }

    localStorage.setItem(
      `perfil:${nombreUrl}:ultima-visita`,
      new Date().toISOString(),
    )
  }, [nombreUrl, usuarioCoincide])

  if (!authContext) {
    throw new Error('Perfil debe renderizarse dentro de un AuthProvider')
  }

  if (!usuarioCoincide) {
    return (
      <main className="profile-page">
        <section className="profile-message">
          <h1>Perfil no disponible</h1>
        <p>Inicia sesión con el usuario correspondiente para ver este perfil.</p>
        <Link to="/login">Ir a iniciar sesión</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="profile-page">
      <header className="profile-header">
        <Link className="profile-brand" to="/">Plataforma</Link>
        <h1>Perfil de Gabriel Jorquera</h1>
      </header>
      <article className="gabriel-profile-card">
        <p className="profile-eyebrow">Integrante del Laboratorio 1</p>
        <h2>Plataforma de práctica con React y TypeScript</h2>
        <p className="profile-project-description">
          Aplicación web creada con Vite, con rutas para la página principal,
          el inicio de sesión y los perfiles de usuario.
        </p>
        <button
          className="profile-like-button"
          type="button"
          onClick={() => setMeGusta((cantidad) => cantidad + 1)}
        >
          Me gusta: {meGusta}
        </button>
      </article>
    </main>
  )
}

export default Perfil
