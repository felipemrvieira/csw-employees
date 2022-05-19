// @ts-nocheck
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import * as axios from 'axios'
import Projects from './index'
import { fetchProjects, postProject } from '../../utils/fetchData'

jest.mock('axios')

describe('Projects page', () => {
  test('renders modal when clicked', () => {
    render(<Projects />)

    const AddButton = screen.getByText('Add', { exact: false })
    userEvent.click(AddButton)

    const modalHeaderText = screen.getByText(/Add Project/i)
    expect(modalHeaderText).toBeInTheDocument()
  })

  test('shows error message when try to delete an unselected item', async () => {
    render(
      <>
        <ToastContainer />
        <Projects />
      </>
    )

    const DeleteButton = screen.getByText('Delete', { exact: false })
    userEvent.click(DeleteButton)

    expect(
      await screen.findByText('You need to select an item to delete!')
    ).toBeInTheDocument()
  })

  test('fetch and render projects itens', async () => {
    const data = {
      data: {
        projects: [
          {
            id: 1,
            name: 'Project X',
            employees: [
              {
                id: 2,
                name: 'Felipe',
                allocation: '50%',
              },
              {
                id: 3,
                name: 'Maria',
                allocation: '50%',
              },
            ],
          },
          {
            id: 2,
            name: 'Project Y',
            employees: [
              {
                id: 9,
                name: 'Rael Maciel',
                allocation: '50%',
              },
              {
                id: 11,
                name: 'Thiago Maciel',
                allocation: '50%',
              },
              {
                id: 2,
                name: 'Felipe',
                allocation: '50%',
              },
            ],
          },
          {
            name: 'teste',
            id: 3,
          },
          {
            name: 'asd',
            id: 4,
          },
          {
            name: 'asd',
            id: 5,
          },
          {
            name: 'Acesso à vpn',
            id: 6,
          },
          {
            name: 'asd',
            id: 7,
          },
        ],
      },
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))

    await expect(fetchProjects()).resolves.toEqual(data)

    waitFor(() => {
      const projectsRows = screen.findAllByRole('row')
      expect(projectsRows).not.toHaveLength(0)
    })
  })
})
