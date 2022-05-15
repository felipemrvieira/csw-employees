/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck

import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Modal, Icon, Table } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import ProjectsStore from '../../../context/projects-context'

import { Container } from './styles'

import 'react-datepicker/dist/react-datepicker.css'

function AllocationModal() {
  const {
    allocationModalOpen,
    setAllocationModalOpen,
    addItem,
    selectedItem,
    setSelectedItem,
    createProject,
  } = useContext(ProjectsStore)

  const [project, setProject] = useState({})

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const loadProject = async () => {
    const response = await api.get(`/projects/${selectedItem}`)
    setProject(response.data)
  }

  useEffect(() => {
    if (selectedItem) {
      loadProject()
    }
  }, [selectedItem])

  const onSubmit = async (data) => {
    const employee = await createProject(data)
    addItem(employee)

    toast.success('Project created successfully!')
    reset()
    setSelectedItem(null)
    setAllocationModalOpen(false)
  }

  const handleClose = () => {
    reset()
    setSelectedItem(null)
    setAllocationModalOpen(false)
  }

  return (
    <Container>
      <Modal
        open={allocationModalOpen}
        size='tiny'
        onClose={() => handleClose()}
      >
        <Modal.Header>Project Employees</Modal.Header>
        <Modal.Content>
          <Container>
            <Table celled fixed selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell> Allocation </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {project.employees &&
                  project.employees.map(({ id, name, allocation }) => (
                    <Table.Row key={id} onClick={() => console.log(id)}>
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>{allocation}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>{' '}
          </Container>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={handleSubmit(onSubmit)}>
            {selectedItem ? 'Edit' : 'Add'}
          </Button>
          <Button onClick={() => handleClose()}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    </Container>
  )
}

export default AllocationModal
