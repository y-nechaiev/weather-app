import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav className="mb-4">
      <div className="mx-auto sm:px-6 md:max-w-2xl md:px-0 lg:max-w-4xl lg:px-2 xl:max-w-4xl xl:px-0 2xl:max-w-6xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className='md:pl-0 pl-3'>
             <Link to="/">
              <h3 className="ml-1 text-xl font-semibold">Weather App</h3>
              </Link></div>
          </div>
        </div>
 
    </nav>
  );
};

export default Navigation;
