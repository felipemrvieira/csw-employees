import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'
import Nav from './index'

describe('Nav component', () => {
  test('renders nav with Employees link', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )
    const text = screen.getByText('Employees', { exact: false })
    expect(text).toBeInTheDocument()
  })

  test('renders nav with Projects link', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )
    const text = screen.getByText('Projects', { exact: false })
    expect(text).toBeInTheDocument()
  })
})
