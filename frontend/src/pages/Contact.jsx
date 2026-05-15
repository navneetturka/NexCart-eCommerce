import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>

      {/* Heading */}

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Main Section */}

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>

        <img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt=""
        />

        <div className='flex flex-col justify-center items-start gap-6'>

          {/* Store Heading */}

          <div>
            <p className='text-2xl font-semibold text-gray-800'>
              Our Store
            </p>
            <div className='w-16 h-[2px] bg-orange-500 mt-2'></div>
          </div>

          {/* About */}

          <p className='text-gray-500 leading-7'>
            Venzara is an online-first fashion brand bringing
            premium streetwear and modern style directly to your screen.
            No physical stores — just pure fashion delivered to your doorstep 
          </p>

          {/* Contact */}

          <div>
            <p className='font-semibold text-xl text-gray-700'>
              Contact Us
            </p>

            <p className='text-gray-500 mt-2'>
              Email: venzara.fashion@gmail.com
            </p>
          </div>

          {/* Socials */}

          <div>
            <p className='font-semibold text-xl text-gray-700 mb-4'>
              Connect With Us
            </p>

            <div className='flex gap-5 text-3xl'>

              <a
                href="#"
                className='hover:text-pink-500 hover:scale-110 transition-all duration-300'
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className='hover:text-blue-500 hover:scale-110 transition-all duration-300'
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className='hover:text-black hover:scale-110 transition-all duration-300'
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className='hover:text-sky-500 hover:scale-110 transition-all duration-300'
              >
                <FaTwitter />
              </a>

            </div>
          </div>

          {/* Careers */}

          <div className='mt-4'>
            <p className='font-semibold text-xl text-gray-700'>
              Careers at Venzara
            </p>

            <p className='text-gray-500 mt-2 leading-7'>
              Passionate about fashion and innovation?
              Join our growing digital team and help shape
              the future of online shopping.
            </p>

            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 mt-5'>
              Explore Jobs
            </button>
          </div>

        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact