import React from 'react'
import { NavLink } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'
import { IconDashboard, IconFiles, IconRobot, IconUsers, IconBox } from '@tabler/icons-react'

export default function Navigation() {
  const location = useLocation()

  const links = [
    { icon: IconDashboard, label: 'Dashboard', to: '/dashboard' },
    { icon: IconFiles, label: 'Dokumente', to: '/documents' },
    { icon: IconRobot, label: 'Smartassistent', to: '/smart-assistant' },
    {
      icon: IconUsers,
      label: 'Stammdaten',
      links: [
        { label: 'Kundenverwaltung', to: '/customers' },
        { label: 'Artikelverwaltung', to: '/products' }
      ]
    }
  ]

  const items = links.map((item) => {
    if (item.links) {
      return (
        <NavLink
          key={item.label}
          label={item.label}
          icon={<item.icon size={16} stroke={1.5} />}
        >
          {item.links.map((link) => (
            <NavLink
              component={Link}
              to={link.to}
              key={link.label}
              label={link.label}
              active={location.pathname === link.to}
            />
          ))}
        </NavLink>
      )
    }

    return (
      <NavLink
        component={Link}
        to={item.to}
        key={item.label}
        label={item.label}
        icon={<item.icon size={16} stroke={1.5} />}
        active={location.pathname === item.to}
      />
    )
  })

  return <>{items}</>
}
