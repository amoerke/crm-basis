import React, { useState } from 'react'
import { AppShell, Navbar, Header, Footer, Text, MediaQuery, Burger, useMantineTheme, Button } from '@mantine/core'
import { Outlet, useNavigate } from 'react-router-dom'
import { IconLogout } from '@tabler/icons-react'
import { useAuth } from '../stores/auth'
import Navigation from './Navigation'

export default function Layout() {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const logout = useAuth((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <AppShell
      styles={{
        main: {
          background: 'transparent',
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Navigation />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <Text component="a" href="/privacy">Datenschutz</Text>
            <Text component="a" href="/imprint">Impressum</Text>
          </div>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Text>CRM System</Text>
            </div>
            <Button
              variant="subtle"
              color="gray"
              onClick={handleLogout}
              leftIcon={<IconLogout size={16} />}
            >
              Logout
            </Button>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  )
}
