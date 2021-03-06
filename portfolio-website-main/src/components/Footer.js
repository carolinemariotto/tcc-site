import React from 'react';
import { social } from '../data';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-2'>
      <div className='container mx-auto'>
        <div className='flex flex-  col lg:flex-row space-y-9 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
         
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Caroline Mariotto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
