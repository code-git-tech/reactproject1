import React from 'react';
import { useNavigate } from 'react-router-dom'; // import for navigation

const Login = () => {
  const navigate = useNavigate(); // initialize navigation hook

  const handleLogin = (e) => {
    e.preventDefault(); // prevent page reload
    // Normally here you’d check credentials via backend
    // For now, just simulate successful login
    navigate('/'); // navigate to homepage or dashboard
  };
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Login to Your Account</h2>  
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          {/* ✅ LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
