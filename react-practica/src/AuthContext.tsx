/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, type ReactNode } from 'react'

export interface Usuario {
  nombre: string
}

export interface AuthContextType {
  usuario: Usuario | null
  iniciarSesion: (nombre: string) => void
  cerrarSesion: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  function iniciarSesion(nombre: string) {
    setUsuario({ nombre })
  }

  function cerrarSesion() {
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  )
}
