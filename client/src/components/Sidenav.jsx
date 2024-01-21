import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';
import home from '../assets/CustomIcons/Home.svg';
import community from '../assets/CustomIcons/peeps.png';
import play from '../assets/CustomIcons/Play.svg';
import user from '../assets/CustomIcons/User.svg';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);

      // Set isOpen to true if the screen size is larger than 768
      setIsOpen(!smallScreen);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      {!isOpen && isSmallScreen && (
        <button className='fixed top-4 left-4 z-10 bg-white p-2 rounded-md shadow-md' onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
      )}
      {isOpen && (
        <div className='absolute top-0 left-0 flex flex-row items-start justify-start'>
          {isSmallScreen && (
            <button className='fixed top-4 left-4 z-10 bg-white p-2 rounded-md shadow-md ml-24' onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <div className={`h-screen rounded-3xl px-2 max-w-64 text-black flex flex-col justify-between bg-white ${!isOpen ? 'hidden' : ''}`}>
            <div className="flex flex-row items-center justify-between md:pl-7 md:pr-9 pt-3">
              <div className='flex flex-row items-center justify-center'>
                <img src={logo} alt="logo" className="w-24 h-24" onClick={() => navigate('/')} />
              </div>
            </div>

            <ul className="space-y-2 mx-2 text-center font-info">
              <li className="">
                <a href="/" className="hover:text-blue-300 flex items-center" onClick={() => navigate('/')}>
                  <img src={home} alt="home_logo" className="mr-2 w-5 h-5" />
                  HOME
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:text-blue-300 flex items-center ">
                  <img src={community} alt="community_logo" className="mr-2 w-5 h-5" />
                  COMMUNITY
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:text-blue-300 flex items-center" onClick={()=>navigate('/room')}>
                  <img src={play} alt="play_logo" className="mr-2 w-5 h-5" />
                  ROOM
                </a>
              </li>
            </ul>
            <div className="mb-4 text-xl mx-2 font-bold">
              <a href="#" className="hover:text-blue-300 flex items-center font-action tracking-wider">
                <img src={user} alt="user_logo" className="mr-2" />
                USERNAME
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
