import { useContext, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import './Login.css'

function Login() {
  const [nombreUsuario, setNombreUsuario] = useState<string>('')
  const [contrasena, setContrasena] = useState<string>('')
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  if (!authContext) {
    throw new Error('Login debe renderizarse dentro de un AuthProvider')
  }

  const { iniciarSesion } = authContext

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    iniciarSesion(nombreUsuario)
    navigate(`/perfil/${encodeURIComponent(nombreUsuario)}`)
  }

  return (
    <main className="login-page">
      <section className="login-form-section" aria-labelledby="login-title">
        <Link className="login-home-link" to="/">
          Plataforma
        </Link>
        <h1 id="login-title">Iniciar sesión</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre-usuario">Nombre de usuario</label>
          <input
            autoComplete="username"
            id="nombre-usuario"
            name="nombreUsuario"
            onChange={(event) => setNombreUsuario(event.target.value)}
            required
            type="text"
            value={nombreUsuario}
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            autoComplete="current-password"
            id="contrasena"
            name="contrasena"
            onChange={(event) => setContrasena(event.target.value)}
            required
            type="password"
            value={contrasena}
          />

          <button type="submit">Iniciar sesión</button>
        </form>
      </section>
    </main>
  )
}

export default Login
