import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
  id='about' 
  className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 scroll-mt-20 overflow-hidden'
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 1}}
>
  {/* Titles */}
  <motion.h4 
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
    className='text-center mb-2 text-lg font-Ovo'
  >
    Introduction
  </motion.h4>

  <motion.h2 
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.5}}
    className='text-center text-4xl sm:text-5xl font-Ovo'
  >
    About me
  </motion.h2>

  {/* Content */}
  <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8}}
    className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-16 w-full overflow-hidden'
  >
    {/* Profile Image */}
    <motion.div
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 0.6}}
      className='w-[80%] max-w-xs sm:max-w-sm rounded-3xl bg-[#fdf6e3]'
    >
      <Image 
        src={isDarkMode ? assets.user_dark_image : assets.user_light_image} 
        alt='user' 
        className='w-full h-auto rounded-3xl' 
      />
    </motion.div>

    {/* Info and Tools */}
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.8}}
      className='flex-1 w-full'
    >
      <p className='mb-10 max-w-2xl mx-auto font-Ovo'>
        I am a dedicated Frontend Developer with 3 years of professional experience. Over the years, I have contributed to impactful projects and collaborated with forward-thinking teams, helping drive user-centric solutions and business growth.
      </p>

      <motion.ul
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay: 1}}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto'
      >
        {infoList.map(({icon, iconDark, title, description}, index) => (
          <motion.li 
            whileHover={{scale: 1.05}}
            key={index}
            className='border border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
          >
            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
          </motion.li>
        ))}
      </motion.ul>

      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-center'
      >
        Tools I use
      </motion.h4>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className='flex flex-wrap justify-center gap-3 sm:gap-5 max-w-3xl mx-auto'
      >
        {toolsData.map((tool, index) => (
          <motion.li 
            whileHover={{ scale: 1.1 }}
            key={index}
            className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
          >
            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </motion.div>
</motion.div>

  )
}

export default About
