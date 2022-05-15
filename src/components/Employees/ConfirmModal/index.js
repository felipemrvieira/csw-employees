/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck

import React, { useContext } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import EmployeesStore from '../../../context/employees-context'

import { Container } from './styles'

function ConfirmModal() {
  const { confirmModalOpen, setConfirmModalOpen, deleteItem } =
    useContext(EmployeesStore)

  const onSubmit = () => {
    deleteItem()
    setConfirmModalOpen(false)
    toast.success('Item deleted successfully!')
  }

  const handleClose = () => {
    setConfirmModalOpen(false)
  }

  return (
    <Container>
      <Modal
        className='round'
        open={confirmModalOpen}
        size='mini'
        onClose={() => handleClose()}
      >
        <Modal.Content>
          <h2>Delete Employee</h2>
          Are you sure you want to delete employee Felipe Maciel and his
          allocation to projects?
          <br />
          <br />
          <div>
            <Button primary onClick={() => onSubmit()}>
              Delete
            </Button>
            <Button onClick={() => handleClose()}>Cancel</Button>
          </div>
        </Modal.Content>
      </Modal>
    </Container>
  )
}

export default ConfirmModal
