// Import necessary dependencies
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Code2, CloudCog, FileQuestion, Settings, Phone, LogOut } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar"

// Import the logo from the src folder
import logo from '../assets/Logo.png'

// AppSidebar component
export function AppSidebar() {
  const navigate = useNavigate()
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState("Repositories")

  // Handler for logout action
  const handleLogout = () => {
    navigate('/signup')
  }

  // Handler for navigation between pages
  const handleNavigation = (page) => {
    setActiveItem(page) // Update the active item
    navigate(`/${page.toLowerCase().replace(" ", "-")}`) // Navigate to the corresponding route
  }

  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          {/* Company Logo */}
          <img
            src={logo} // Use the imported logo
            alt="CodeAnt AI Logo"
            className="w-8 h-8 rounded-lg"
          />
          {/* Company Name */}
          <span className="font-semibold">CodeAnt AI</span>
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarMenu>
          {/* Repositories Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => handleNavigation("Repositories")}
              className={`w-full ${activeItem === "Repositories" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              <Code2 className="mr-2 h-4 w-4" />
              Repositories
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* AI Code Review Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => handleNavigation("AI Code Review")}
              className={`w-full ${activeItem === "AI Code Review" ? "bg-blue-600 text-white" : ""}`}
            >
              <Code2 className="mr-2 h-4 w-4" />
              AI Code Review
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Cloud Security Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => handleNavigation("Cloud Security")}
              className={`w-full ${activeItem === "Cloud Security" ? "bg-blue-600 text-white" : ""}`}
            >
              <CloudCog className="mr-2 h-4 w-4" />
              Cloud Security
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* How to Use Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => handleNavigation("How to Use")}
              className={`w-full ${activeItem === "How to Use" ? "bg-blue-600 text-white" : ""}`}
            >
              <FileQuestion className="mr-2 h-4 w-4" />
              How to Use
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Settings Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => handleNavigation("Settings")}
              className={`w-full ${activeItem === "Settings" ? "bg-blue-600 text-white" : ""}`}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          {/* Support Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Phone className="mr-2 h-4 w-4" />
              Support
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Logout Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
