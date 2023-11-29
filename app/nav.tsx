'use client'
import React, {useState} from 'react'

import NavBar from './navbar'
import TopBar from './topbar'

export default function Nav({children}: {children: React.ReactNode}) {
  const [isNavVisible, setIsNavVisible] = useState(true)

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-col bg-gray-800 text-white">
        {isNavVisible && <NavBar />}
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-200 p-4 shadow">
          <TopBar onToggleNav={toggleNav} />
        </div>
        {/* Children Page Content */}
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  )
}
