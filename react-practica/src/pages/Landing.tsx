import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <Link className="landing-brand" to="/" aria-label="Ir al inicio">
          Plataforma
        </Link>
        <Link className="landing-login-link" to="/login">
          Iniciar sesión
        </Link>
      </header>

      <main>
        <section className="landing-hero">
          <p className="landing-eyebrow">Un espacio para ti</p>
          <h1>Todo lo que necesitas, en un solo lugar.</h1>
          <p className="landing-description">
            Accede a tu espacio personal, mantén tu información organizada y
            encuentra fácilmente lo que buscas.
          </p>
          <Link className="landing-cta" to="/login">
            Entrar a la plataforma
          </Link>
        </section>

        <section className="landing-info" aria-labelledby="landing-info-title">
          <h2 id="landing-info-title">Una plataforma simple y personal</h2>
          <p>
            Inicia sesión para acceder a tu cuenta y consultar tu perfil desde
            cualquier momento.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Landing
