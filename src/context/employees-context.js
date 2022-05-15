import { createContext } from 'react'

const EmployeesContext = createContext({
  employees: [],
  setFormModalOpen: (val) => {},
  setConfirmModalOpen: (val) => {},
  selectedItem: null,
  setSelectedItem: (val) => {},
  deleteItem: (val) => {},
})

export default EmployeesContext
