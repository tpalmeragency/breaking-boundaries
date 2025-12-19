'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const navItems = ['Home', 'Episodes', 'About']
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <header
      className={`top-0 z-20 flex w-full items-center justify-between border-b border-transparent bg-[var(--bb-black)] px-12 py-12 text-[var(--bb-white)]`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <a className="hover:!text-default" href={'/'}>
          <h1 className="sr-only">Navigation Bar</h1>
          <Image
            src="/images/branding/t-palmer-logo.svg"
            alt="Company Logo"
            width={182}
            height={83}
            priority
          />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex items-center">
        {/* Desktop Navigation*/}
        <nav className="mr-20 hidden items-center justify-start font-sans md:flex">
          <ul className="flex hidden items-center gap-15 sm:flex">
            {navItems.map((item, i) => (
              <li key={i} className="nav-item flex items-center gap-2">
                <a className="" href={'/'}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="ml-2 rounded-md text-[var(--bb-white)] hover:bg-gray-100 hover:text-gray-600 md:hidden lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 border-b border-gray-200 bg-white shadow-lg lg:hidden">
          <nav className="px-4 py-4">
            <ul className="space-y-3">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    className="flex items-center justify-between py-2 text-base font-medium text-gray-900 hover:text-gray-700"
                    href={'/'}
                  >
                    {item}
                    <Image
                      src="/icons/arrow-back-ios.svg"
                      alt="Chevron Arrow Down"
                      width={18}
                      height={18}
                      priority
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
