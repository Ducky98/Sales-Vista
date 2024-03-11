// AuthProvider.js - Custom hook for authentication
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  return authenticated;
};

export default useAuth;
