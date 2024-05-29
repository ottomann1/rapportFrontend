import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface User {
  username: string | null;
  company: string | null;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', { username, password });
      const { access, refresh } = response.data;
      setToken(access);
      localStorage.setItem('token', access);
      localStorage.setItem('refreshToken', refresh);

      // Fetch user information
      const userInfoResponse = await axios.get('http://localhost:8000/api/user-info/', {
        headers: { Authorization: `Bearer ${access}` }
      });

      const userInfo = userInfoResponse.data;
      setUser({ username: userInfo.username, company: userInfo.company });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      // Fetch user information if token exists
      axios.get('http://localhost:8000/api/user-info/', {
        headers: { Authorization: `Bearer ${savedToken}` }
      }).then(response => {
        const userInfo = response.data;
        setUser({ username: userInfo.username, company: userInfo.company });
      }).catch(error => {
        console.error('Failed to fetch user info:', error);
        logout();
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};