import React, { useState } from 'react';
import MainVid from '../../src/assets/video/main.mp4'
import Hero from '../Components/Hero/Hero';
import Places from '../Components/Places/Places';
import BannerImg from '../Components/BannerImg/BannerImg';
import Poster from '../assets/cover-women.jpg'
import Blogs from './Blogs';
import Banner from '../Components/Banner/Banner';
import Banner2 from '../assets/travel-cover2.jpg'
import Testimonials from '../Components/Testimonials/Testimonials';
import Popup from '../Components/Popup/Popup';

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  
  return (
    <>
    <div>
      <div className='relative h-[700px]'>
        <video
        autoPlay
        muted
        loop
        className='absolute top-0 right-0 h-[700px] w-full z-[-1] object-cover'
        src={MainVid}
        ></video>
        <Hero />
      </div>
      <Places handleOrderPopup={handleOrderPopup}/>
      <BannerImg img={Poster}/>
      <Blogs />
      <Banner />
      <BannerImg img={Banner2}/>
      <Testimonials />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
    </>
  );
}

export default Home;
