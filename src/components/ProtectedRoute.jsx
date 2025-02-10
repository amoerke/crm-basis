import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../stores/auth'

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
