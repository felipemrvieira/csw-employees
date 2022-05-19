/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useContext } from 'react'
import _ from 'lodash'

import { Table } from 'semantic-ui-react'
import { Container, Blue } from './styles'
import ProjectsStore from '../../../context/projects-context'

function ProjectsTable() {
  const { projects, selectedItem, setSelectedItem, setAllocationModalOpen } =
    useContext(ProjectsStore)

  const handleClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null)
    } else {
      setSelectedItem(item)
    }
  }

  return (
    <Container>
      {projects ? (
        <Table celled fixed selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {projects.map(({ id, name }) => (
              <Table.Row
                active={id === selectedItem}
                key={id}
                onClick={() => handleClick(id)}
              >
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>
                  <Blue onClick={() => setAllocationModalOpen(true)}>
                    Employees
                  </Blue>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <h1>No data to show</h1>
      )}
    </Container>
  )
}

export default ProjectsTable
