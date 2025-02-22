import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Department from './pages/Department';
import StaffProfile from './pages/StaffProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department/:slug" element={<Department />} />
            <Route path="/staff/:id" element={<StaffProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;