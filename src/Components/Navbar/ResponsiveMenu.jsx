import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navbarLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Blogs",
    link: "/blogs"
  },
  {
    name: "Best Places",
    location: "/places"
  }  
]

const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <>
    <div className={`${
      showMenu ? "left-0" : "-left-[100%]"
    } fixed bottom-0 top-0 z-20 flex h-screen w-[50%]
    flex-col justify-between bg-white dark:bg-gray-900
    dark:text-white px-8 pb-6 pt-16 text-black
    transition-all duration-200 md:hidden rounded-r-xl`}>
      <div>
        {/* top section */}
        <div className='flex items-center gap-4 justify-start'>
          <FaUserCircle size={50} className='text-gray-300'/>
          <div className='text-gray-500'>
            <h1>Hello User</h1>
            <h1 className='text-sm text-slate-500'>Premium User</h1>
          </div>
        </div>
        {/* Navbar Links */}
        <div className='text-black mt-12'>
          <ul className='space-y-4 text-xl'>
            {
              navbarLinks.map(({name, link}) => (
                <li className='hover:bg-gradient-to-r hover:from-primary hover:bg-secondary hover:text-white px-2 rounded-md'>
                  <Link
                  to={link}
                  onClick={() => setShowMenu(true)}
                  className='mb-5 inline-block'
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default ResponsiveMenu;
