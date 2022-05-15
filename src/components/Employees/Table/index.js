/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useState, useContext } from 'react'
import _ from 'lodash'

import { Table } from 'semantic-ui-react'
import { Container } from './styles'
import EmployeesStore from '../../../context/employees-context'

function EmployeesTable() {
  const { employees, selectedItem, setSelectedItem, formModalOpen } =
    useContext(EmployeesStore)

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
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Platoon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employees.map(({ id, name, startDate, role, platoon }) => (
            <Table.Row
              active={id === selectedItem}
              key={id}
              onClick={() => handleClick(id)}
            >
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>
                {new Date(startDate).toLocaleDateString('en-US')}
              </Table.Cell>
              <Table.Cell>{role}</Table.Cell>
              <Table.Cell>{platoon}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>{' '}
    </Container>
  )
}

export default EmployeesTable
