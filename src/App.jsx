// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import PetListPage from './pages/PetListPage'
import PetDetailPage from './pages/PetDetail'
import BreedPage from './pages/BreedPage'
import SearchForm from './pages/SearchForm'
// import SearchPage from './pages/SearchPage'
import ErrorBoundary from './components/ErrorBoundary'
import PetDetails from './pages/PetDetail'

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetListPage />} />
          <Route path="/pet-details" element={<PetDetails />} />
          <Route path="/breeds" element={<BreedPage />} />
          <Route path="/search" element={<SearchForm />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
