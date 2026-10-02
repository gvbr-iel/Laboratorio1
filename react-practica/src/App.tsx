import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Perfil from './pages/Perfil'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil/:usuario" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
