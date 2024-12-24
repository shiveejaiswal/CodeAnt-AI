import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RepositoryPage from './pages/RepositoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/repositories" element={<RepositoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
