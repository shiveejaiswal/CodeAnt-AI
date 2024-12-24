import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import RepositoryPage from './pages/RepositoryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/repository" element={<RepositoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
