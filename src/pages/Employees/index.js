// @ts-nocheck
import React, { useState } from 'react'
import FormModal from '../../components/Employees/FormModal'
import ConfirmModal from '../../components/Employees/ConfirmModal'
import Table from '../../components/Employees/Table'
import ActionButtons from '../../components/Employees/ActionButtons'

import 'react-toastify/dist/ReactToastify.css'

function EmployeesPage() {
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John',
      startDate: new Date(),
      role: 'SE',
      platoon: 'Alchemists',
    },
    {
      id: 2,
      name: 'Felipe',
      startDate: new Date(),
      role: 'TM',
      platoon: 'Spartans',
    },
    {
      id: 3,
      name: 'Maria',
      startDate: new Date(),
      role: 'JE',
      platoon: 'BigBang',
    },
    {
      id: 4,
      name: 'Jack',
      startDate: new Date(),
      role: 'PE',
      platoon: 'Spartans',
    },
  ])
  const [selectedItem, setSelectedItem] = useState(null)

  const deleteItem = () => {
    const newEmployees = employees.filter((item) => item.id !== selectedItem)
    setSelectedItem(null)
    setEmployees(newEmployees)
  }

  const addItem = (item) => {
    setEmployees([...employees, item])
  }

  return (
    <div>
      <ActionButtons
        setFormModalOpen={setFormModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
        deleteItem={deleteItem}
        selectedItem={selectedItem}
      />
      <Table
        employees={employees}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <FormModal
        formModalOpen={formModalOpen}
        setFormModalOpen={setFormModalOpen}
        addItem={addItem}
      />
      <ConfirmModal
        confirmModalOpen={confirmModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
        deleteItem={deleteItem}
      />
    </div>
  )
}

export default EmployeesPage
