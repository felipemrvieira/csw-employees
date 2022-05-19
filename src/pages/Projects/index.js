/* eslint-disable react/jsx-no-constructed-context-values */
// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react'
import FormModal from '../../components/Projects/FormModal'
import ConfirmModal from '../../components/Projects/ConfirmModal'
import AllocationModal from '../../components/Projects/AllocationModal'
import Table from '../../components/Projects/Table'
import ActionButtons from '../../components/Projects/ActionButtons'
import 'react-toastify/dist/ReactToastify.css'
import ProjectsContext from '../../context/projects-context'
import { fetchProjects, postProject } from '../../utils/fetchData'

function ProjectsPage() {
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [allocationModalOpen, setAllocationModalOpen] = useState(false)
  const [projects, setProjects] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadProjects = async () => {
    const response = await fetchProjects()
    if (response?.status === 200) {
      setProjects(response.data)
    }
  }

  const createProject = useCallback(async (project) => {
    const response = postProject(project)
    return response.data
  }, [])

  useEffect(() => {
    loadProjects()
  }, [])

  const deleteItem = () => {
    const newProjects = projects.filter((item) => item.id !== selectedItem)
    setSelectedItem(null)
    setProjects(newProjects)
  }

  const addItem = (item) => {
    setProjects([...projects, item])
  }

  return (
    <div>
      <ProjectsContext.Provider
        value={{
          projects,
          selectedItem,
          setSelectedItem,
          allocationModalOpen,
          setAllocationModalOpen,
          formModalOpen,
          setFormModalOpen,
          addItem,
          deleteItem,
          confirmModalOpen,
          setConfirmModalOpen,
          createProject,
        }}
      >
        <ActionButtons />
        <Table />
        <FormModal />
        <ConfirmModal />
        <AllocationModal />
      </ProjectsContext.Provider>
    </div>
  )
}

export default ProjectsPage
