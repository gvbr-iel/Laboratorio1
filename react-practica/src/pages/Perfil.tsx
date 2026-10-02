import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import './Perfil.css'

function Perfil() {
  const { usuario: usuarioUrl } = useParams<{ usuario: string }>()
  const authContext = useContext(AuthContext)
  const [vistas, setVistas] = useState(0)
  const nombreUsuario = authContext?.usuario?.nombre

  useEffect(() => {
    if (!nombreUsuario || usuarioUrl !== nombreUsuario) {
      return
    }

    localStorage.setItem(
      `ultimaVisitaPerfil:${nombreUsuario}`,
      new Date().toISOString(),
    )
  }, [nombreUsuario, usuarioUrl])

  if (!authContext) {
    throw new Error('Perfil debe renderizarse dentro de un AuthProvider')
  }

  const { usuario } = authContext

  if (!usuario) {
    return (
      <main className="profile-page">
        <section className="profile-message">
          <h1>Inicia sesión para ver este perfil</h1>
          <Link to="/login">Ir a iniciar sesión</Link>
        </section>
      </main>
    )
  }

  if (usuarioUrl !== usuario.nombre) {
    return (
      <main className="profile-page">
        <section className="profile-message">
          <h1>Este perfil no corresponde a tu sesión</h1>
          <Link to={`/perfil/${encodeURIComponent(usuario.nombre)}`}>
            Ir a mi perfil
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="profile-page">
      <article className="profile-card">
        <p className="profile-eyebrow">Perfil de estudiante</p>
        <h1>{usuario.nombre}</h1>
        <dl className="profile-details">
          <div>
            <dt>Proyecto</dt>
            <dd>Plataforma React</dd>
          </div>
          <div>
            <dt>Usuario</dt>
            <dd>{usuario.nombre}</dd>
          </div>
        </dl>
        <p className="profile-views" aria-live="polite">
          Vistas de este perfil: <strong>{vistas}</strong>
        </p>
        <button
          className="profile-view-button"
          onClick={() => setVistas((total) => total + 1)}
          type="button"
        >
          Registrar vista
        </button>
      </article>
    </main>
  )
}

export default Perfil
