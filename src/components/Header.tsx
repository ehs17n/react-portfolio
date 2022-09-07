import React, { useEffect, useRef, useState } from 'react';

type HeaderProps = {
  isVisible?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    // console.log(isScrolled);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // bg - [#E7ECEE];
  // sticky top-0
  return (
    <header
      className={`sticky top-0 z-30 flex w-full items-center justify-between ${
        isVisible && 'text-black'
      }`}
    >
      <div className=''>
        <img src='/Ehsan.png' width='80px' height='50px' alt='' />
      </div>
      <nav className='flex'>
        <div>HI</div>
        <div>Projects</div>
        <div>What ever</div>
      </nav>
    </header>
  );
};
export default Header;
