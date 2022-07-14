import React from 'react';
import Image from '../assets/img/gifs/study-grif.gif';

const About = () => {
  return (
    <section className='section bg-secondary' id='About'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[596px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Caroline Mariotto
              </h2>
              <p className='mb-4 text-accent'>
                Web Developer
              </p>
              <hr className='mb-5 opacity-5' />
              <p className='mb-8'>
              Meu objetivo é ensinar tudo o que você precisa saber, estudos, dicas, rotina e diversas outras informações.
              
              </p>
            </div>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfsctSnqqdVHJRkPTGDFLjmqKKsjLglWZjBxRShQGfQMhLcxJWrvTHsstklvrNHWKlVfgB'>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
