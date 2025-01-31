import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import { LoginPage } from './Routes/Rotes'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginPage/>}></Route>

    </Routes>
    </>
  )
}

export default App
