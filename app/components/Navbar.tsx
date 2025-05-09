'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

// navlink component
const NavLink = ({ href, label, isActive }: { href: string; label: string; isActive: boolean }) => (
  <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
    <Link
      href={href}
      className={`relative px-3 py-2 transition-colors duration-300 group ${
        isActive ? 'text-accent' : 'text-primary hover:text-accent'
      }`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-accent transform origin-left transition-all duration-200 
        ${isActive ? 'w-full' : 'group-hover:w-full'}`}></span>
    </Link>
  </motion.li>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // enhanced anime var
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      } 
    }
  };
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };
  
  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-5 bg-white shadow-lg'
          : 'py-6 bg-white/95 backdrop-blur-sm'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 mr-3 rounded-full bg-white flex items-center justify-center overflow-hidden transition-colors">
              <Image 
                src="/images/logo.jpg" 
                alt="Neuronuggets Logo" 
                width={40} 
                height={40} 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-primary">
              Neuro<span className="text-accent">nuggets</span>
            </h1>
          </Link>
        </motion.div>

        {/* desktop nav */}
        <motion.nav className="hidden md:block">
          <ul className="flex space-x-3">
            <NavLink href="/" label="Home" isActive={pathname === '/'} />
            <NavLink href="/articles" label="Articles" isActive={pathname === '/articles'} />
            <NavLink href="/about" label="About" isActive={pathname === '/about'} />
            <NavLink href="/opportunities" label="Opportunities" isActive={pathname === '/opportunities'} />
            <NavLink href="/socials" label="Connect" isActive={pathname === '/socials'} />
          </ul>
        </motion.nav>

        {/* theme toggle and mobile butt */}
        <div className="flex items-center space-x-3">
          {/* butt */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex flex-col justify-center items-center w-6 h-6 relative">
              <motion.span
                className="w-6 h-0.5 bg-primary rounded absolute"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 0 : -3
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-primary rounded absolute"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-primary rounded absolute"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? 0 : 3
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.nav className="flex flex-col">
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/"
                  className={`block py-3 px-4 my-1 rounded-md ${
                    pathname === '/' ? 'bg-accent/20 text-accent' : 'hover:bg-accent/10 hover:text-accent'
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/articles"
                  className={`block py-3 px-4 my-1 rounded-md ${
                    pathname === '/articles' ? 'bg-accent/20 text-accent' : 'hover:bg-accent/10 hover:text-accent'
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Articles
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/about"
                  className={`block py-3 px-4 my-1 rounded-md ${
                    pathname === '/about' ? 'bg-accent/20 text-accent' : 'hover:bg-accent/10 hover:text-accent'
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/opportunities"
                  className={`block py-3 px-4 my-1 rounded-md ${
                    pathname === '/opportunities' ? 'bg-accent/20 text-accent' : 'hover:bg-accent/10 hover:text-accent'
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Opportunities
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/socials"
                  className={`block py-3 px-4 my-1 rounded-md ${
                    pathname === '/socials' ? 'bg-accent/20 text-accent' : 'hover:bg-accent/10 hover:text-accent'
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connect
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};