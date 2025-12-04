import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { ThemeProvider } from '../src/context/ThemeContext'
import Hero from './components/Hero'

function App() {

  return (
    <ThemeProvider>
      <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'></div>
        <Header />
        <main><Hero /></main>
        
    </ThemeProvider>
  )
}

export default App
