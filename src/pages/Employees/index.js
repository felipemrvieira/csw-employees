// @ts-nocheck
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import api from '../../services/api'
import FormModal from '../../components/Employees/FormModal'
import ConfirmModal from '../../components/Employees/ConfirmModal'
import Table from '../../components/Employees/Table'
import ActionButtons from '../../components/Employees/ActionButtons'
import EmployeesContext from '../../context/employees-context'

import 'react-toastify/dist/ReactToastify.css'

function EmployeesPage() {
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [employees, setEmployees] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadEmployees = async () => {
    const response = await api.get('/employees')
    setEmployees(response.data)
  }

  const createEmployee = useCallback(async (employee) => {
    const response = await api.post('/employees', employee)
    return response.data
  }, [])

  const editEmployee = useCallback(async (employee, id) => {
    const response = await api.put(`/employees/${id}`, employee)
    return response.data
  }, [])

  useEffect(() => {
    loadEmployees()
  }, [])

  const deleteItem = () => {
    const newEmployees = employees.filter((item) => item.id !== selectedItem)
    setSelectedItem(null)
    setEmployees(newEmployees)
  }

  const addItem = (item) => {
    setEmployees([...employees, item])
  }

  const editItem = (item) => {
    const newEmployees = employees.map((employee) =>
      employee.id === item.id ? item : employee
    )
    setEmployees(newEmployees)
  }

  const value = useMemo(
    () => ({
      employees,
      selectedItem,
      setSelectedItem,
      confirmModalOpen,
      setConfirmModalOpen,
      formModalOpen,
      setFormModalOpen,
      createEmployee,
      editEmployee,
      addItem,
      editItem,
      deleteItem,
    }),
    [
      employees,
      selectedItem,
      setSelectedItem,
      confirmModalOpen,
      setConfirmModalOpen,
      formModalOpen,
      setFormModalOpen,
      createEmployee,
      editEmployee,
      addItem,
      editItem,
      deleteItem,
    ]
  )

  return (
    <div>
      <EmployeesContext.Provider value={value}>
        <ActionButtons />
        <Table />
        <FormModal />
        <ConfirmModal />
      </EmployeesContext.Provider>
    </div>
  )
}

export default EmployeesPage
