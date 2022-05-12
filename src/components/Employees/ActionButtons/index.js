/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { Container } from './styles'

function ActionButtons({
  setFormModalOpen,
  deleteItem,
  setConfirmModalOpen,
  selectedItem,
}) {
  const handleDeleteClick = () => {
    if (!selectedItem) {
      toast.error('You need to select an item to delete!')
    } else {
      setConfirmModalOpen(true)
    }
  }

  return (
    <Container>
      <div>
        <Button
          content='Add'
          icon='add'
          labelPosition='left'
          onClick={() => setFormModalOpen(true)}
        />
        <Button content='Edit' icon='edit' labelPosition='left' />
        <Button
          content='Delete'
          icon='delete'
          labelPosition='left'
          onClick={() => handleDeleteClick()}
        />
      </div>
    </Container>
  )
}

export default ActionButtons
