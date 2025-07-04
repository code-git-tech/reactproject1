import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form>
          <input type="text" placeholder="Name" className="w-full p-2 border mb-3 rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border mb-3 rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border mb-3 rounded" />
          <input type="password" placeholder="Confirm Password" className="w-full p-2 border mb-3 rounded" />
          <button className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
