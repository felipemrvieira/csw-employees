import { createContext } from 'react'

const ProjectsContext = createContext({
  setFormModalOpen: (val) => {},
  setConfirmModalOpen: (val) => {},
  selectedItem: null,
  setSelectedItem: (val) => {},
})

export default ProjectsContext
