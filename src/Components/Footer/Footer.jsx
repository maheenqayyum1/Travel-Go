import React from 'react';
import FooterLogo from '../../assets/logo.png';
import {
  FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt
} from 'react-icons/fa';
import NatureVid from '../../assets/video/footer.mp4';
import { Link } from 'react-router-dom';

const FooterLinks = [
  {
    title: "Home",
    link: '/'
  },
  {
    title: "About",
    link: '/about'
  },
  {
    title: "Best Places",
    link: '/places'
  },
  {
    title: "Blogs",
    link: '/blogs'
  }
]
const Footer = () => {
  return (
    <div className='py-10 relative overflow-hidden'>
      <video 
      autoPlay
      loop
      muted
      className='absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]'
      src={NatureVid}></video>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl'>
          <div className='py-8 px-4'>
            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
              <img src={FooterLogo} alt="" className='max-h-[60px]'/>
            </h1>
            <p className='text-sm'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quae doloremque illum delectus optio,
              quo voluptatem ad labore culpa ullam veniam.
            </p>
            <br/>
            <div className='flex items-center gap-3 mt-3'>
              <FaLocationArrow/>
              <p>Lahore, Pakistan</p>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <FaMobileAlt/>
              <p>+123 456 789</p>
            </div>
            {/* Social handles */}
            <div>
              <div className='flex items-center gap-3 mt-6'>
                <a href="/#">
                  <FaInstagram className='text-3xl'/>
                </a>
                <a href="/#">
                  <FaFacebook className='text-3xl'/>
                </a>
                <a href="/#">
                  <FaLinkedin className='text-3xl'/>
                </a>
              </div>
            </div>
          </div>
          {/* Footer Links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            {/* First Col Links */}
            <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                Important Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map(({title, link}) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-gray-700 hover:!text-primary'>
                      <Link to={link}
                      onClick={() => {
                        window.scrollTo(0,0);
                      }}
                      >
                      <span>&#11162;</span>
                      <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            </div>
            {/* second col links */}
            <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                Important Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map(({title, link}) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-gray-700 hover:!text-primary'>
                      <Link to={link}
                      onClick={() => {
                        window.scrollTo(0,0);
                      }}
                      >
                      <span>&#11162;</span>
                      <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            </div>
            {/* Third Col Links */}
            <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                Important Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map(({title, link}) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-gray-700 hover:!text-primary'>
                      <Link to={link}
                      onClick={() => {
                        window.scrollTo(0,0);
                      }}
                      >
                      <span>&#11162;</span>
                      <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright Section */}
        <div>
          <div 
          className='py-5 text-center border-t-2 border-gray-300/50
          bg-primary text-white'
          >
            @copyright 2024 All rights reserved || Made with ❤️ by MQJ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
