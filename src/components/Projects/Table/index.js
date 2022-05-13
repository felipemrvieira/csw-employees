/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useState } from 'react'
import _ from 'lodash'

import { Table } from 'semantic-ui-react'
import { Container, Blue } from './styles'

function ProjectsTable({
  projects,
  selectedItem,
  setSelectedItem,
  setAllocationModalOpen,
}) {
  const handleClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null)
    } else {
      setSelectedItem(item)
    }
  }

  return (
    <Container>
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
      </Table>{' '}
    </Container>
  )
}

export default ProjectsTable
