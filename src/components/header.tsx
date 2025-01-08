'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blogs', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.youtube.com/channel/UCM_kddl-hlfMXGumB1VtCqQ', icon: Youtube },
    { href: 'https://instagram.com/saudali195', icon: Instagram },
    { href: 'https://facebook.com/saud5036', icon: Facebook },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-[#ffe4c4] dark:bg-[#232a2f] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-serif font-bold text-[#7f5539] dark:text-[#f4d19e] hover:text-[#a15d3e] dark:hover:text-[#f3b98b] transition-colors">
            <span className="relative group">
            Foodie&#39;s Delight
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7f5539] dark:bg-[#f4d19e] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#5c4532] dark:text-[#f0cba0] hover:text-[#7f5539] dark:hover:text-[#f3b98b] transition-colors relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7f5539] dark:bg-[#f3b98b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#5c4532] dark:text-[#f0cba0] hover:text-[#7f5539] dark:hover:text-[#f3b98b] transition-colors">
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-[#5c4532] dark:text-[#f0cba0] hover:text-[#7f5539] dark:hover:text-[#f3b98b] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex border-2 border-[#7f5539] dark:border-[#f3b98b] text-[#7f5539] dark:text-[#f3b98b] px-4 py-2 hover:bg-[#7f5539] dark:hover:bg-[#f3b98b] hover:text-white dark:hover:text-[#232a2f] transition-colors rounded-md font-medium"
            >
             Let&#39;s Talk
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-[#5c4532] dark:text-[#f0cba0] hover:text-[#7f5539] dark:hover:text-[#f3b98b] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#ffe4c4] dark:bg-[#232a2f] transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#5c4532] dark:text-[#f0cba0] hover:text-[#7f5539] dark:hover:text-[#f3b98b] transition-colors text-2xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-2 border-[#7f5539] dark:border-[#f3b98b] text-[#7f5539] dark:text-[#f3b98b] px-6 py-3 hover:bg-[#7f5539] dark:hover:bg-[#f3b98b] hover:text-white dark:hover:text-[#232a2f] transition-colors rounded-md text-xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let&#39;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
