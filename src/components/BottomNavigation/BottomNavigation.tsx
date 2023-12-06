import React from 'react';

import HomeSvg from '@/assets/icons/home.svg';
import OrderHistory from '@/assets/icons/order-history.svg';
import Favourites from '@/assets/icons/favourites.svg';
import ActiveOrders from '@/assets/icons/active-orders.svg';

const BottomNavigation = () => {
  return (
    <div className='w-full grid grid-cols-4 fixed bottom-0 text-xs h-24 border-black border-t-[1px] py-3 '>
      <div className='flex flex-col items-center gap-0.5'>
        <img className='w-6' src={HomeSvg} />
        <p>Home</p>
      </div>
      <div className='flex flex-col items-center gap-0.5'>
        <img className='w-6' src={ActiveOrders} />
        <div className='flex flex-col items-center'>
          <p>Active</p>
          <p className='-mt-1'>Orders</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-0.5'>
        <img className='w-6' src={OrderHistory} />
        <div className='flex flex-col items-center'>
          <p>Order</p>
          <p className='-mt-1'>History</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-0.5'>
        <img className='w-7 h-7' src={Favourites} />
        <p>Favourites</p>
      </div>
    </div>
  );
};

export default BottomNavigation;
