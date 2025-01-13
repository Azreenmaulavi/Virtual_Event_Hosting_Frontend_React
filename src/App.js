
import './index.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import Layout from './components/common/Layout';
import SignUp from './components/auth/Signup';
import Login from './components/auth/Login';
import ForgotPassword from './components/pages/ForgotPassword';
import Loader from './components/common/Loader';
import { useEffect , useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
    // Simulate a loading state (e.g., fetching data)
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); // Hide loader after 3 seconds (for example)
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
        {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
   
      <Routes>
        <Route path="/" element={<Layout><LandingPage/></Layout>} />
        <Route path="/signup" element={<Layout><SignUp/></Layout>} />
        <Route path="/login" element={<Layout><Login/></Layout>} />
        <Route path="/forgot-password" element={<Layout><ForgotPassword/></Layout>} />
      </Routes>
      )}
       </div>

  );
}

export default App;
