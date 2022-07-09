import React from 'react';
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-10 capitalize text-[18px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-100'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
