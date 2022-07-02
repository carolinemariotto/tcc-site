import React from 'react';
import Img from '../assets/img/gifs/idol.gif';
import { animateScrollasscroll } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[95vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Seja bem vindx! 👋
            </p>
            <h1 className='text-1xl leading-[14px] md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.1] font-bold md:tracking-[1px]'>
              Disponibilizando meus  <br /> materiais de estudo e links :)
            </h1>
            <p className='pt-1 pb-1 md:pt-1 md:pb-12 max-w-[400px] text-lg text-center lg:text-left'>
            
            </p>
            <a href='https://www.instagram.com/carolm_studies/'>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover  md:btn-lg transition-all'>
                IR PARA O INSTAGRAM
              </button>
            </a>
              
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={Img} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
