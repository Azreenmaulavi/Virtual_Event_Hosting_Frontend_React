// hooks/useAuth.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || '');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      setAuthToken(token);
      navigate('/dashboard');
    } catch (err) {
      setErrors({ general: 'Invalid credentials' });
    }
  };

  // Sign-up function
  const signUp = async (name, email, password, role) => {
    try {
      await axios.post('/api/auth/signup', { name, email, password, role });
      navigate('/login');
    } catch (err) {
      setErrors({ general: 'Error during signup' });
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken('');
    navigate('/login');
  };

  return {
    authToken,
    errors,
    login,
    signUp,
    logout
  };
};

export default useAuth;
