import React from 'react'
import { Button } from 'semantic-ui-react'

import { Container } from './styles'

function ActionButtons() {
  return (
    <Container>
      <div>
        <Button content='Add' icon='add' labelPosition='left' />
        <Button content='Edit' icon='edit' labelPosition='left' />
        <Button content='Delete' icon='delete' labelPosition='left' />
      </div>
    </Container>
  )
}

export default ActionButtons
