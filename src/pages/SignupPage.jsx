import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import groupImage from '../assets/Group 37111.png';
import logoImage from '../assets/Logo.png';
import githubIcon from '../assets/github.png';
import bitbucketIcon from '../assets/bitbucket.png';
import azureIcon from '../assets/azure.png';
import gitlabIcon from '../assets/gitlab.png';
import secondImage from '../assets/Subtract.png';
import keyIcon from '../assets/sso.png';

const SignupPage = () => {
  const [selectedOption, setSelectedOption] = useState('SAAS');
  const navigate = useNavigate();

  // Handle toggle button clicks (SAAS vs Self Hosted)
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Redirect to RepositoryPage on login button click
  const handleLoginClick = () => {
    navigate('/repository');
  };

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left Section */}
      <div className="hidden md:flex md:flex-col md:justify-between bg-gray-100 p-8">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={groupImage}
            alt="CodeAnt AI Features"
            className="max-w-full max-h-[50vh] object-contain"
          />
        </div>
        <div className="mt-8">
          <img
            src={secondImage}
            alt="Additional CodeAnt AI Feature"
            className="max-w-full max-h-[30vh] object-contain"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center px-6 py-8 md:px-8 lg:px-12">
        <div className="w-full max-w-[400px] space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
            <img
              src={logoImage}
              alt="CodeAnt AI"
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-gray-900">CodeAnt AI</span>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Welcome to CodeAnt AI
            </h1>
          </div>

          {/* Toggle Buttons (SAAS vs Self Hosted) */}
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                selectedOption === 'SAAS'
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => handleOptionChange('SAAS')}
            >
              SAAS
            </button>
            <button
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                selectedOption === 'SELF HOSTED'
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => handleOptionChange('SELF HOSTED')}
            >
              Self Hosted
            </button>
          </div>

          {/* Conditional Render: Buttons for SAAS or Self-Hosted */}
          {selectedOption === 'SAAS' ? (
            <div className="space-y-3">
              <button
                className="relative h-11 w-full rounded-md border border-gray-300 bg-white px-4 font-normal text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLoginClick}
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="absolute left-4 h-5 w-5"
                />
                <span className="ml-8 text-gray-700">Sign up with GitHub</span>
              </button>
              <button
                className="relative h-11 w-full rounded-md border border-gray-300 bg-white px-4 font-normal text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLoginClick}
              >
                <img
                  src={bitbucketIcon}
                  alt="Bitbucket"
                  className="absolute left-4 h-5 w-5"
                />
                <span className="ml-8 text-gray-700">Sign up with Bitbucket</span>
              </button>
              <button
                className="relative h-11 w-full rounded-md border border-gray-300 bg-white px-4 font-normal text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLoginClick}
              >
                <img
                  src={azureIcon}
                  alt="Azure DevOps"
                  className="absolute left-4 h-5 w-5"
                />
                <span className="ml-8 text-gray-700">Sign up with Azure DevOps</span>
              </button>
              <button
                className="relative h-11 w-full rounded-md border border-gray-300 bg-white px-4 font-normal text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLoginClick}
              >
                <img
                  src={gitlabIcon}
                  alt="GitLab"
                  className="absolute left-4 h-5 w-5"
                />
                <span className="ml-8 text-gray-700">Sign up with GitLab</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                className="relative h-11 w-full rounded-md border border-gray-300 bg-white px-4 font-normal text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLoginClick}
              >
                <img
                  src={gitlabIcon}
                  alt="Self-Hosted GitLab"
                  className="absolute left-4 h-5 w-5"
                />
                <span className="ml-8 text-gray-700">Sign up with Self-Hosted GitLab</span>
              </button>
              <button
                className="relative h-11 w-full rounded-md border border-gray-300 bg-white px-4 font-normal text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLoginClick}
              >
                <img
                  src={keyIcon}
                  alt="SSO"
                  className="absolute left-4 h-5 w-5"
                />
                <span className="ml-8 text-gray-700">Sign in with SSO</span>
              </button>
            </div>
          )}

          {/* Privacy Notice */}
          <p className="text-center text-sm text-gray-500">
            By signing up you agree to the{" "}
            <span className="text-blue-600 underline underline-offset-4 hover:text-blue-800">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
