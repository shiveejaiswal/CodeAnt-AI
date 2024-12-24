"use client"

// Imports
import React, { useState } from 'react'
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Button } from "./ui/Button"
import { RefreshCw, Plus, Search, Lock, Globe } from 'lucide-react'

// Repository data
const repositories = [
  { name: "design-system", isPublic: true, language: "React", size: "7320 KB", updatedAt: "1 day ago" },
  { name: "codeant-ci-app", isPublic: false, language: "Javascript", size: "5871 KB", updatedAt: "2 days ago" },
  { name: "analytics-dashboard", isPublic: false, language: "Python", size: "4521 KB", updatedAt: "5 days ago" },
  { name: "mobile-app", isPublic: true, language: "Swift", size: "3096 KB", updatedAt: "3 days ago" },
  { name: "e-commerce-platform", isPublic: false, language: "Java", size: "6210 KB", updatedAt: "6 days ago" },
  { name: "blog-website", isPublic: true, language: "HTML/CSS", size: "1876 KB", updatedAt: "4 days ago" },
  { name: "social-network", isPublic: false, language: "PHP", size: "5432 KB", updatedAt: "7 days ago" },
  { name: "ai-chatbot", isPublic: true, language: "Python", size: "8754 KB", updatedAt: "2 hours ago" },
  { name: "blockchain-explorer", isPublic: true, language: "Go", size: "3987 KB", updatedAt: "1 week ago" },
  { name: "iot-home-automation", isPublic: false, language: "C++", size: "2345 KB", updatedAt: "3 weeks ago" },
  { name: "ar-navigation-app", isPublic: true, language: "Swift", size: "9876 KB", updatedAt: "2 days ago" },
  { name: "quantum-algorithm-simulator", isPublic: false, language: "Python", size: "1543 KB", updatedAt: "1 month ago" },
  { name: "cybersecurity-toolkit", isPublic: true, language: "Rust", size: "4321 KB", updatedAt: "5 hours ago" },
  { name: "game-engine", isPublic: false, language: "C#", size: "12543 KB", updatedAt: "2 weeks ago" },
  { name: "data-visualization-library", isPublic: true, language: "JavaScript", size: "3210 KB", updatedAt: "3 days ago" },
  { name: "machine-learning-framework", isPublic: true, language: "Python", size: "15678 KB", updatedAt: "1 day ago" },
  { name: "distributed-database", isPublic: false, language: "Go", size: "7890 KB", updatedAt: "4 days ago" },
  { name: "virtual-reality-toolkit", isPublic: true, language: "C++", size: "11234 KB", updatedAt: "1 week ago" },
  { name: "cloud-deployment-tool", isPublic: true, language: "TypeScript", size: "2987 KB", updatedAt: "6 hours ago" },
  { name: "natural-language-processor", isPublic: false, language: "Python", size: "9876 KB", updatedAt: "2 days ago" },
  { name: "cryptocurrency-wallet", isPublic: true, language: "Rust", size: "3456 KB", updatedAt: "3 days ago" },
  { name: "real-time-collaboration-app", isPublic: false, language: "JavaScript", size: "6789 KB", updatedAt: "5 days ago" },
  { name: "3d-modeling-software", isPublic: true, language: "C++", size: "18765 KB", updatedAt: "1 month ago" },
  { name: "serverless-functions-library", isPublic: true, language: "Node.js", size: "1234 KB", updatedAt: "2 hours ago" },
  { name: "augmented-reality-sdk", isPublic: false, language: "Swift", size: "8901 KB", updatedAt: "1 week ago" },
  { name: "decentralized-storage-solution", isPublic: true, language: "Go", size: "5678 KB", updatedAt: "4 days ago" },
  { name: "voice-recognition-api", isPublic: true, language: "Python", size: "3210 KB", updatedAt: "2 days ago" },
  { name: "cross-platform-gui-framework", isPublic: false, language: "C++", size: "14321 KB", updatedAt: "3 weeks ago" },
  { name: "microservices-orchestrator", isPublic: true, language: "Java", size: "7654 KB", updatedAt: "5 days ago" },
  { name: "peer-to-peer-networking-library", isPublic: false, language: "Rust", size: "2345 KB", updatedAt: "1 day ago" },
  { name: "quantum-cryptography-toolkit", isPublic: true, language: "Python", size: "4567 KB", updatedAt: "6 days ago" },
  { name: "gesture-recognition-system", isPublic: false, language: "C#", size: "9876 KB", updatedAt: "2 weeks ago" },
  { name: "distributed-computing-platform", isPublic: true, language: "Go", size: "11234 KB", updatedAt: "3 days ago" }
]

// Language color mapping
const languageColors = {
  React: "#61dafb",
  Javascript: "#f7df1e",
  Python: "#3572A5",
  Swift: "#ffac45",
  Java: "#b07219",
  "HTML/CSS": "#e34c26",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  "C++": "#f34b7d",
  Rust: "#dea584",
  "C#": "#178600",
  TypeScript: "#2b7489",
  "Node.js": "#68a063"
}

// Main component
export function RepositoryList() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Handle refresh button click
  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log("Repositories refreshed")
    } catch (error) {
      console.error("Refresh failed", error)
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <div className="p-6">
      {/* Header section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-sm text-muted-foreground">{repositories.length} total repositories</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh All'}
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-9">
            <Plus className="mr-2 h-4 w-4" />
            Add Repository
          </Button>
        </div>
      </div>

      {/* Search input */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search Repositories"
          className="pl-10 max-w-md h-9"
        />
      </div>

      {/* Repository list */}
      <div className="space-y-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-2">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="flex items-center justify-between py-3 px-4 bg-white rounded-lg border hover:border-blue-500 transition-colors"
          >
            <div className="space-y-1.5">
              {/* Repository name and visibility badge */}
              <div className="flex items-center gap-2">
                <span className="font-medium text-[15px]">{repo.name}</span>
                <Badge 
                  variant="secondary" 
                  className={`px-2 py-0.5 h-5 font-normal ${
                    repo.isPublic 
                      ? "bg-blue-50 text-blue-700" 
                      : "bg-gray-50 text-gray-700"
                  }`}
                >
                  {repo.isPublic ? (
                    <Globe className="mr-1 h-3 w-3" />
                  ) : (
                    <Lock className="mr-1 h-3 w-3" />
                  )}
                  {repo.isPublic ? "Public" : "Private"}
                </Badge>
              </div>
              {/* Repository details */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <span 
                    className="w-1.5 h-1.5 rounded-full mr-1.5" 
                    style={{ 
                      backgroundColor: languageColors[repo.language] || "#888" 
                    }} 
                  />
                  {repo.language}
                </span>
                <span>{repo.size}</span>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}