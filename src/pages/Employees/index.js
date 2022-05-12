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
    { id: 1, name: 'John', age: 15, gender: 'Male' },
    { id: 2, name: 'Amber', age: 40, gender: 'Female' },
    { id: 3, name: 'Leslie', age: 25, gender: 'Other' },
    { id: 4, name: 'Ben', age: 70, gender: 'Male' },
  ])
  const [selectedItem, setSelectedItem] = useState(null)

  const deleteItem = () => {
    const newEmployees = employees.filter((item) => item.id !== selectedItem)
    setSelectedItem(null)
    setEmployees(newEmployees)
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
