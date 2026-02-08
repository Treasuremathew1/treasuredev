import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { assests } from '../assets/assests';
import { BriefcaseBusiness, Home, Mail, User, Workflow, Menu, X } from 'lucide-react';

function Header() {

  // const headerVariants = {
  //   hidden: { opacity: 0, y: -50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };

  const [ isOpen, setIsOpen ] = useState(false);
  return (
    <div>
      <motion.header
       className='fixed top-0 left-0 w-full md:max-w-7xl p-6 md:p md:ml-10 md:mr-0 mt-3 md:mt-4 rounded-xl border border-white/10 flex items-center justify-between backdrop-blur-lg bg-black/10 text-white z-50 shadow-lg'
      >

        <motion.a className=''>
            <img 
            src={assests.treasure} 
            alt="Logo" 
            className='w-34 h-10 object-cover'
             />
        </motion.a>

        <div>
            <motion.nav
             className='md:flex items-center gap-8 mr-8 hidden'
            >
                <motion.a 
                 href='#' 
                 className='flex items-center gap-2 lg:bg-[#003459] lg:p-2 lg:rounded-lg'>
                    <Home />
                    Home
                </motion.a>
                <motion.a href='#' className='flex items-center gap-2'>
                    <User />
                    About
                </motion.a>
                <motion.a href='#' className='flex items-center gap-2'>
                    <BriefcaseBusiness />
                    Project
                </motion.a>
                <motion.a href='#' className='flex items-center gap-2'>
                    <Mail />
                    Contant
                </motion.a>
            </motion.nav>
        </div>

        <div
          className='md:hidden text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu  className='w-6 h-6 cursor-pointer'/>
        </div>
      </motion.header>

      {isOpen && (
        <motion.header className='fixed top-0 left-0 w-full p-6 mt-3 rounded-xl border border-white/10 flex flex-col items-center justify-between backdrop-blur-lg bg-black/10 text-white z-50 shadow-lg md:hidden'>
          {/* <SaidBar /> */}
          <X  className='fixed top-4 right-4 w-7 h-7 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
          <div className='flex items-center justify-between w-full'>
            <motion.nav className='flex flex-col items-center gap-4 mr-8 w-full'>
              <motion.a href='#' className='flex items-center gap-2 lg:bg-[#003459] lg:p-2 lg:rounded-lg'>
                  <Home />
                  Home
              </motion.a>
              <motion.a href='#' className='flex items-center gap-2'>
                  <User />
                  About
              </motion.a>
              <motion.a href='#' className='flex items-center gap-2'>
                  <BriefcaseBusiness />
                  Project
              </motion.a>
              <motion.a href='#' className='flex items-center gap-2'>
                  <Mail />
                  Contant
              </motion.a>
            </motion.nav>
          </div>
        </motion.header>
      )}
    </div>
  )
}

export default Header
