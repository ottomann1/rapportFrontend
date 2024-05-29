import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

const DynamicNavbar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();

  const getPageName = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      default:
        return '';
    }
  };

  return (
    <CustomNavbar
      pageName={getPageName(location.pathname)}
      userName={user?.username ?? null}
      companyName={user?.company ?? null}
    />
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <DynamicNavbar />
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
