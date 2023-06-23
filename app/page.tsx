'use client';
import Image from 'next/image'
import Socialsbar from './components/Socialsbar'
import EmailSidebar from './components/EmailSidebar'
import { motion } from 'framer-motion'
import Banner from './components/Banner';

export default function Home() {
  return (
   <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden'>
       <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        {/* only show in large screen */}
        <motion.div
          initial={{opacity: 0 }}
          animate={{opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='hidden xl:inline-flex w-32 h-full fixed left-0 button-0'
        >
          <Socialsbar/>
        </motion.div>
        <div className='h-[88vh] w-full mx-auto p-4'>
          <Banner/>
          {/* about */}
          {/* experience */}
          {/* projects */}
          {/* contacts */}
        </div>
        <motion.div 
          initial={{opacity: 0 }}
          animate={{opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='hidden xl:inline-flex w-32 h-full fixed right-0 button-0'
          >
            <EmailSidebar/>
          </motion.div>
    </div>
  
   </main>
  )
}
