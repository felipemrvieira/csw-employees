import { render, screen } from '@testing-library/react'
import React from 'react'
import Header from './index'

describe('Header component', () => {
  test('renders header with title', () => {
    render(<Header />)
    const text = screen.getByText('CSW Employees & Projects', { exact: false })
    expect(text).toBeInTheDocument()
  })
})
