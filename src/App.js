import React from 'react'
import './App.css'
import './semantic.css'
import PageHeader from './components/Header'
import Nav from './components/Nav'
import Table from './components/Table'

function App() {
  return (
    <div className='App'>
      <PageHeader />
      <Nav />
      <Table />
    </div>
  )
}

export default App
