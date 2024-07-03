import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaMailBulk, FaTelegram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id='home' className='w-full h-[88vh] text-center bg-black text-white '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center  flex-col-reverse sm:flex-row'>
        <div>
          <p className='uppercase text-sm tracking-widest font-extralight'>
          Let's build together
          </p>
          <h1 className='py-4 text-4xl font-bold'>
            Hi, I&#39;m <span className='text-blue-400 '> Fita</span>
          </h1>
          <h1 className='py-2 font-serif text-blue-400'>Multidisciplinary Developer and Designer</h1>
          <p className='py-4  sm:max-w-[70%] m-auto font-thin'>
          I'm Machine Learning Engineer specializing in web and mobile app development, UI/UX design, and graphics design. I create innovative solutions by combining cutting-edge technology with user-centric design to deliver exceptional digital experiences. </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
            <a
              href='https://t.me/fita_wegene'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full  bg-white text-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTelegram />
              </div>
            </a>
            <a
              href='https://github.com/fi-taa'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full  bg-white text-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full  bg-white text-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full  bg-white text-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
        <Image src="/logo.png" className='w-56 md:w-96' width={400} height={400} alt='/' />
      </div>
      
    </div>
  );
};

export default Hero;
