import React from 'react';

import MarketImage from '@/assets/images/facility-rogers-1.png';
import RightArrow from '@/assets/icons/arrow.svg';

interface UserProfileProps {
  name: string;
  opening: string;
  prepareTime: string;
}

const Restaurant = ({ name, opening, prepareTime }: UserProfileProps) => {
  return (
    <div className='flex mt-3 gap-2'>
      <img src={MarketImage} />
      <div className='w-[1250px]'>
        <p className='font-medium text-lg'>{name}</p>
        <p className='text-sm text-[#3C514A]'>{opening}</p>
      </div>
      <div className='w-full gap-0.5 flex flex-col justify-center items-center'>
        <img className='w-3 h-3' src={RightArrow} />
        <p className='text-xs text-[#3C514A]'>{prepareTime} mins</p>
      </div>
    </div>
  );
};

export default Restaurant;
