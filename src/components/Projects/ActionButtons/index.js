/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { Container } from './styles'

function ActionButtons({
  setFormModalOpen,
  setConfirmModalOpen,
  selectedItem,
  setSelectedItem,
}) {
  const handleDeleteClick = () => {
    if (!selectedItem) {
      toast.error('You need to select an item to delete!')
    } else {
      setConfirmModalOpen(true)
    }
  }

  const handleAddClick = () => {
    setFormModalOpen(true)
    setSelectedItem(null)
  }

  return (
    <Container>
      <div>
        <Button
          content='Add'
          icon='add'
          labelPosition='left'
          onClick={() => handleAddClick()}
        />

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
