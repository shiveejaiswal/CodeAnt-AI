import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepositoryPage = () => {
  const navigate = useNavigate();

  // Handle Logout click
  const handleLogout = () => {
    navigate('/signup');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[400px] space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Welcome to Your Repository Page!
        </h1>
        <p className="text-center text-gray-500">
          Here you can manage your repositories and other settings.
        </p>

        {/* Logout Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-md bg-blue-600 text-white text-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepositoryPage;
