import React from 'react'
import { Container, Title, TextInput, PasswordInput, Button, Text } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../stores/auth'

export default function Login() {
  const login = useAuth((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ id: 1, email: 'user@example.com' })
    navigate('/dashboard')
  }

  return (
    <Container size={420} my={40}>
      <Title align="center">Willkommen zurück</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          mt="md"
        />
        <PasswordInput
          label="Passwort"
          placeholder="Ihr Passwort"
          required
          mt="md"
        />
        <Button type="submit" fullWidth mt="xl">
          Anmelden
        </Button>
      </form>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Noch kein Konto?{' '}
        <Text component={Link} to="/register" size="sm" color="blue">
          Registrieren
        </Text>
      </Text>
    </Container>
  )
}
