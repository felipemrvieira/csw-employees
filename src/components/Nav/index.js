import React from 'react'
import { Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import { Container } from './styles'

function Nav() {
  return (
    <Container>
      <Menu>
        <Menu.Item as={Link} to='/employees'>
          Employees
        </Menu.Item>
        <Menu.Item as={Link} to='/projects'>
          Projects
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default Nav
