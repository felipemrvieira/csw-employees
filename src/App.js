// @ts-nocheck
import React from 'react'
import './App.css'
import './semantic.css'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Employees from './pages/Employees'
import Projects from './pages/Projects'
import PageHeader from './components/Header'
import Nav from './components/Nav'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer />
        <PageHeader />
        <Nav />
        <Routes>
          <Route path='/' element={<Employees />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
