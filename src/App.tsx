import { useState } from 'react'
import './App.css'
import ScroteOverview from './scrote/pages/overview'
import ScroteSubmissions from './scrote/pages/submissions'
import ScrotePage from './scrote/scrote-page'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AdminHomepage from './home/home'
import Login from './home/login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHomepage />} />
          <Route path="/login" element={<Login />} />

          <Route path="scrote" element={<ScrotePage />}>
            <Route index element={<ScroteOverview />} />
            <Route index path="overview" element={<ScroteOverview />} />
            <Route path="submissions" element={<ScroteSubmissions />} />
            <Route path="files" element={<ScroteSubmissions />} />
            <Route path="email" element={<ScroteSubmissions />} />
            <Route path="observer" element={<ScroteSubmissions />} />
          </Route>


        </Routes>

        <footer style={{ padding: '8px', color: 'white', textAlign: 'center' }}>
          <hr />
          <p>SoftwareMongers ©</p>
        </footer>
      </BrowserRouter>

    </>
  )
}

export default App
