import React, { useState } from 'react';
import Button from '../common/Button';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


function SignUp() {
  const { signUp, errors } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Attendee');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
    signUp(name, email, password, role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit}>
           {/* Display Errors */}
           {Array.isArray(errors) && errors.length > 0 && (
  <div className="mb-4 text-red-500 text-sm">
    {errors.map((error, index) => (
      <p key={index}>{error}</p>
    ))}
  </div>
)}
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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

          {/* Role Selection */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Your Role</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Attendee">Attendee</option>
              <option value="Organizer">Organizer</option>
              <option value="Speaker">Speaker</option>
              <option value="Moderator">Moderator</option>
              <option value="Sponsor">Sponsor</option>
            </select>
          </div>

          {/* Sign Up Button */}
          <Button
            text="Sign Up"
            color="bg-gray-800 text-white border border-white"
            hoverColor="bg-white-700"
          />
        </form>
          {/* Sign Up Link */}
          <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
