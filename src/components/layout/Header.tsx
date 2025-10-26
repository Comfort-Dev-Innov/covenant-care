'use client'

import React, { useState, useEffect } from 'react'
import Logo from '../base/Logo'
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose, IoHome, IoInformationCircle, IoCard, IoHelpCircle, IoCall } from "react-icons/io5"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { IconType } from 'react-icons'

type MenuItem = {
  label: string
  href: string
  icon: IconType
  subMenu?: { label: string; href: string }[]
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/', icon: IoHome },
  {
    label: 'About Us', href: '#about', icon: IoInformationCircle,
    subMenu: [
      { label: 'Our Story', href: '#story' },
      { label: 'Our Core Values', href: '#core-values' },
      { label: 'Company Goals', href: '#company-goals' },
      { label: 'Satellites', href: '#satellites' },
      { label: 'Management Team', href: '#management' },
    ]
  },
  { label: 'Plans/Benefits', href: '#plans', icon: IoCard },
  { label: 'FAQ', href: '#faq', icon: IoHelpCircle },
  { label: 'Contact Us', href: '#contact', icon: IoCall },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCloseDrawer = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsDrawerOpen(false)
      setIsClosing(false)
      setOpenMobileSubmenu(null)
    }, 300) // Match animation duration
  }

  return (
    <div className={`fixed bg-background top-0 left-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-2xl rounded-b-[80px]' : ''}`}>
      <header className={`bg-background flex items-center justify-between max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0 transition-all duration-300 ${isScrolled ? 'rounded-b-[30px] md:rounded-b-[80px] md:py-2' : 'md:py-4'}`}>
        <div className="w-auto min-[1440px]:w-1/2 h-[91px]">
          <Logo />
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex 2xl:gap-[30px]">
              {menuItems.map((item) => (
                <li
                  key={item.href}
                  className="px-[12px] lg:px-[20px] py-[10px] lg:py-[16px] last:pr-0 relative"
                  onMouseEnter={() => item.subMenu && setOpenSubmenu(item.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="font-inter text-[14px] lg:text-[16px] text-black hover:drop-shadow-[0_0_4px_rgba(0,48,73,0.5)] hover:text-primary transition-all duration-300"
                  >
                    {item.label}
                  </a>
                  {item.subMenu && openSubmenu === item.label && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50 animate-[slideDown_0.2s_ease-out] opacity-0 [animation-fill-mode:forwards]">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.href}>
                          <a
                            href={subItem.href}
                            className="block text-[14px] lg:text-[16px] px-4 py-2 font-inter text-black hover:bg-primary/10 hover:text-primary transition-all duration-200"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="block md:hidden">
          <RxHamburgerMenu 
            onClick={() => setIsDrawerOpen(true)}
            className="text-[22px] min-[400px]:text-[30px] hover:text-primary hover:cursor-pointer transition-all duration-300" 
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          {/* Overlay */}
          <div 
            className={`fixed inset-0 bg-black/50 z-[60] ${isClosing ? 'animate-[fadeOut_0.3s_ease-out]' : 'animate-[fadeIn_0.3s_ease-out]'}`}
            onClick={handleCloseDrawer}
          />
          
          {/* Drawer */}
          <div className={`fixed top-0 right-0 h-full w-[280px] min-[400px]:w-[320px] bg-background z-[70] shadow-2xl overflow-y-auto ${isClosing ? 'animate-[slideOutRight_0.3s_ease-out]' : 'animate-[slideInRight_0.3s_ease-out]'}`}>
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <IoClose 
                onClick={handleCloseDrawer}
                className="text-[32px] hover:text-primary hover:cursor-pointer transition-all duration-300"
              />
            </div>

            {/* Navigation Menu */}
            <nav className="pr-4 pl-8 pb-4">
              <ul className="flex flex-col gap-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.href} className="border-b border-gray-200 last:border-0">
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          onClick={() => !item.subMenu && handleCloseDrawer()}
                          className="flex-1 font-inter text-[16px] text-black py-3 hover:text-primary transition-all duration-300 flex items-center gap-3"
                        >
                          <Icon className="text-[20px]" />
                          {item.label}
                        </a>
                        {item.subMenu && (
                          <button
                            onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.label ? null : item.label)}
                            className="p-2 hover:text-primary transition-all duration-300"
                          >
                            {openMobileSubmenu === item.label ? (
                              <FiChevronUp className="text-[20px]" />
                            ) : (
                              <FiChevronDown className="text-[20px]" />
                            )}
                          </button>
                        )}
                      </div>
                    
                    {/* Submenu */}
                    {item.subMenu && openMobileSubmenu === item.label && (
                      <ul className="pl-4 pb-2 animate-[slideDown_0.2s_ease-out]">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.href}>
                            <a
                              href={subItem.href}
                              onClick={handleCloseDrawer}
                              className="block text-[14px] py-2 font-inter text-gray-700 hover:text-primary transition-all duration-200"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}

export default Header