import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

function Perfil() {
  const { usuario: nombreUrl } = useParams<{ usuario: string }>()
  const authContext = useContext(AuthContext)

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

  return <main>Perfil de {authContext.usuario?.nombre}</main>
}

export default Perfil
