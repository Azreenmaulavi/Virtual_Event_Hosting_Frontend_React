import React, { useState } from 'react';
import Button from '../common/Button';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

function Login() {
  const { login, errors } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  // Password strength function
  const checkPasswordStrength = (password) => {
    let strength = '';
    if (password.length < 6) {
      strength = 'Too short';
    } else if (password.length < 8) {
      strength = 'Weak';
    } else if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
      strength = 'Strong';
    } else {
      strength = 'Medium';
    }
    setPasswordStrength(strength);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value);
              }}
              placeholder="********"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showPassword && <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-4 cursor-pointer">👁️</span>}
            <p className="text-sm text-gray-500 mt-1">Password Strength: {passwordStrength}</p>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <Button
              text="Login"
              color="bg-gray-800 text-white border border-white"
              hoverColor="bg-white-700"
            />
          </div>
        </form>
          {/* Sign Up Link */}
          <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
          </p>
        </div>
          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Forgot Password?{' '}
            <Link to="/forgot-password" className="text-blue-500 hover:underline">Clicke Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
