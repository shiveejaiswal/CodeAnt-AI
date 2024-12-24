import React from 'react';

const RepositoryPage = () => {
  const repositories = [
    { name: "Repo 1", description: "Description for repo 1" },
    { name: "Repo 2", description: "Description for repo 2" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Repositories</h1>
        <ul className="space-y-4">
          {repositories.map((repo, index) => (
            <li
              key={index}
              className="p-4 bg-blue-50 rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-blue-700">{repo.name}</h2>
              <p className="text-gray-600">{repo.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                View Repository
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepositoryPage;
