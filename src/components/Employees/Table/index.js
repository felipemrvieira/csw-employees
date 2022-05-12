/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useState } from 'react'
import _ from 'lodash'

import { Table } from 'semantic-ui-react'
import { Container } from './styles'

function EmployeesTable({ employees, selectedItem, setSelectedItem }) {
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
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employees.map(({ age, gender, name, id }) => (
            <Table.Row
              active={id === selectedItem}
              key={id}
              onClick={() => handleClick(id)}
            >
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{age}</Table.Cell>
              <Table.Cell>{gender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>{' '}
    </Container>
  )
}

export default EmployeesTable
