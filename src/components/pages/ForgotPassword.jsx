import React, { useState } from 'react';
import Button from '../common/Button';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (step === 1) {
      // Check if email is provided before moving to the next step
      if (email) {
        // Here you would typically send the email to the server
        console.log('Sending password reset email to:', email);
        setStep(2); // Move to the next step
      } else {
        alert('Please enter your email address.'); // Alert if email is empty
      }
    } else if (step === 2) {
      // Check if code is provided before moving to the next step
      if (code) {
        // Here you would typically verify the code
        console.log('Verifying code:', code);
        setStep(3); // Move to the next step
      } else {
        alert('Please enter the verification code.'); // Alert if code is empty
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit new password logic here
    console.log('New password submitted:', newPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Forgot Password</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {step === 1 && (
            <>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@example.com"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          {step === 2 && (
            <>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">Verification Code</label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the code sent to your email"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          {step === 3 && (
            <>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="********"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          <div className="flex justify-center">
            <Button
              text={step === 3 ? "Submit" : "Next"}
              color="bg-gray-800 text-white border border-white"
              hoverColor="bg-white-700"
              onClick={handleNext}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;