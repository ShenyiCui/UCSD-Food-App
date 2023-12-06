import React from 'react';

interface BodyWrapperProps {
  children: React.ReactNode;
}

export const BodyWrapper = ({ children }: BodyWrapperProps) => {
  const h = window.innerHeight;
  const bodyHeight = h - 96 - 40;

  return (
    <div className='mt-5 relative'>
      <div style={{ height: bodyHeight }} className='w-full px-5 overflow-scroll'>
        {children}
      </div>
    </div>
  );
};

export default BodyWrapper;
