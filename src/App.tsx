import React, { useEffect, useRef, useState } from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Landing from './components/Landing';

const App = () => {
  const Ref = useRef<null | HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      const entry = e[0];

      setIsVisible(entry.isIntersecting);
    });
    observer.observe(Ref.current as Element);
  }, []);
  return (
    <div className=''>
      <Header />
      {/* <Basket /> */}
      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Landing />
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
        <div className='space-y-10 py-16'>
          <div
            className={`transition-all ease-in  duration-500 bg-[#1B1B1B] ${
              isVisible && 'bg-white'
            } `}
          >
            <Header isVisible={isVisible} />
          </div>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
            New Promos
          </h1>
        </div>

        <div className='absolute text-white  bottom-0 font-bold' ref={Ref}>
          {' '}
          hi
        </div>
      </section>
    </div>
  );
};
export default App;
