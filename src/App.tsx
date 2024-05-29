import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

const App: React.FC = () => {
  // Sample user and company information
  const userName = "John Doe";
  const companyName = "Acme Corp";

  return (
    <AuthProvider>
      <Router>
        <CustomNavbar pageName="My App" userName={userName} companyName={companyName} />
        <div className="container mt-5">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
