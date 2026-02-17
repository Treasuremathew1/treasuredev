import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assests } from '../assets/assests';
import { BriefcaseBusiness, Home, User, Mail, Menu, X, Code, Github, Twitter, Instagram } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: BriefcaseBusiness, href: '#projects' },
    { name: 'Tools', icon: Code, href: '#tools' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Treasuremathew1' },
    { icon: Twitter, href: 'https://x.com/treasure_c579700' },
    { icon: Instagram, href: 'https://www.instagram.com/treasuredevs' },
  ];

  const svgBackground = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A6FB' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <div className="font-outfit">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex items-center justify-between backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-3 transition-all duration-300 ${
            scrolled ? 'bg-black/30' : 'bg-black/20'
          }`}>
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img 
                src={assests.treasure} 
                alt="Logo" 
                className="w-34 h-10 object-contain"
              />
            </motion.a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white/90 hover:text-[#00A6FB] transition-colors duration-300 relative group"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A6FB] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-20 left-4 right-4 bg-gradient-to-br from-[#00171F] to-[#003459] border border-[#00A6FB]/30 rounded-2xl shadow-2xl z-40 md:hidden overflow-hidden"
            >
              <div className="relative">
                <div className="absolute inset-0" style={{ backgroundImage: `url('${svgBackground}')`, opacity: 0.2 }} />
                
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <img 
                      src={assests.treasure} 
                      alt="Logo" 
                      className="w-24 h-8 object-contain"
                    />
                  </div>

                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-3 text-white/90 hover:text-white hover:bg-[#00A6FB]/10 rounded-xl transition-all duration-300 group"
                      >
                        <div className="p-2 bg-[#00171F] rounded-lg group-hover:bg-[#00A6FB]/20 transition-colors">
                          <item.icon className="w-5 h-5 text-[#00A6FB]" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </motion.a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-3">Connect with me</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-[#00171F] rounded-lg hover:bg-[#00A6FB] transition-colors group"
                        >
                          <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;