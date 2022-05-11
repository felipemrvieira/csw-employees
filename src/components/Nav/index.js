import React from 'react'
import { Menu } from 'semantic-ui-react'

import { Container } from './styles'

const items = [
  // { key: 'editorials', active: true, name: 'Editorials' },
  { key: 'employees', name: 'Employees' },
  { key: 'projects', name: 'Projects' },
]

function Nav() {
  return (
    <Container>
      <Menu items={items} />{' '}
    </Container>
  )
}

export default Nav
