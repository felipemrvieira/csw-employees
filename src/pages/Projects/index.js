// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react'
import api from '../../services/api'
import FormModal from '../../components/Projects/FormModal'
import ConfirmModal from '../../components/Projects/ConfirmModal'
import AllocationModal from '../../components/Projects/AllocationModal'
import Table from '../../components/Projects/Table'
import ActionButtons from '../../components/Projects/ActionButtons'
import 'react-toastify/dist/ReactToastify.css'

function ProjectsPage() {
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [allocationModalOpen, setAllocationModalOpen] = useState(false)
  const [projects, setProjects] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadProjects = async () => {
    const response = await api.get('/projects')
    setProjects(response.data)
  }

  const createProject = useCallback(async (project) => {
    const response = await api.post('/projects', project)
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
      <ActionButtons
        setFormModalOpen={setFormModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
        deleteItem={deleteItem}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Table
        projects={projects}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setAllocationModalOpen={setAllocationModalOpen}
      />
      <FormModal
        formModalOpen={formModalOpen}
        setFormModalOpen={setFormModalOpen}
        addItem={addItem}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        createProject={createProject}
      />
      <ConfirmModal
        confirmModalOpen={confirmModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
        deleteItem={deleteItem}
      />
      <AllocationModal
        allocationModalOpen={allocationModalOpen}
        setAllocationModalOpen={setAllocationModalOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        projects={projects}
      />
    </div>
  )
}

export default ProjectsPage
