import React from 'react'
import { AppSidebar } from "../components/sidebar"
import { RepositoryList } from "../components/repository-list"

const RepositoryPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AppSidebar />
      <main className="flex-1">
        <RepositoryList />
      </main>
    </div>
  )
}

export default RepositoryPage
