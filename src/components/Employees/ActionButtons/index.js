/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { Container } from './styles'
import EmployeesContext from '../../../context/employees-context'

function ActionButtons() {
  const {
    setFormModalOpen,
    setConfirmModalOpen,
    selectedItem,
    setSelectedItem,
  } = useContext(EmployeesContext)

  const handleDeleteClick = () => {
    if (!selectedItem) {
      toast.error('You need to select an item to delete!')
    } else {
      setConfirmModalOpen(true)
    }
  }
  const handleEditClick = () => {
    if (!selectedItem) {
      toast.error('You need to select an item to edit!')
    } else {
      setFormModalOpen(true)
    }
  }

  const handleAddClick = () => {
    setSelectedItem(null)

    setFormModalOpen(true)
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
          content='Edit'
          icon='edit'
          labelPosition='left'
          onClick={() => handleEditClick()}
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
