import React, { useState } from 'react';
import BottomNavigation from '@components/BottomNavigation';
import Restaurant from '@/components/Restraunt/Restraunt';
import UserProfile from '@/components/ProfileUser/ProfileUser';
import BodyWrapper from '@/components/BodyWrapper/BodyWrapper';

const seedData1 = [
  {
    id: 1,
    name: "Roger's Market",
    opening: 'Open 24 Hrs',
    prepareTime: '30',
  },
  {
    id: 2,
    name: "Lance's Market",
    opening: '11am - 9pm',
    prepareTime: '5',
  },
  {
    id: 3,
    name: "Peter's Market",
    opening: '8am - 10pm',
    prepareTime: '45',
  },
];

const seedData2 = [
  {
    id: 1,
    name: "Roger's Market",
    opening: 'Open 24 Hrs',
    prepareTime: '30',
  },
  {
    id: 2,
    name: "Lance's Market",
    opening: '11am - 9pm',
    prepareTime: '5',
  },
  {
    id: 3,
    name: "Peter's Market",
    opening: '8am - 10pm',
    prepareTime: '45',
  },
  {
    id: 4,
    name: "Justin's Market",
    opening: '11am - 9pm',
    prepareTime: '5',
  },
  {
    id: 5,
    name: "Pak's Market",
    opening: '8am - 10pm',
    prepareTime: '45',
  },
];

const Home = () => {
  const [searchString, setSearchString] = useState<string>('');

  return (
    <>
      <BodyWrapper>
        <UserProfile />
        <div className='flex flex-col mt-2.5'>
          <p className='text-2xl font-medium'>UCSD Restaurants</p>
          <input
            onChange={e => setSearchString(e.target.value)}
            className='border border-black rounded px-4 py-1.5 mt-1'
            placeholder='Search all'
          />
        </div>

        {searchString.length === 0 && (
          <>
            <div className='mt-8'>
              <p className='text-2xl font-medium'>Near you</p>
              {seedData1.map((item, index) => {
                return (
                  <>
                    <Restaurant key={item.id} name={item.name} opening={item.opening} prepareTime={item.prepareTime} />
                    {index !== seedData1.length - 1 && <div className='border-b border-[#E2E8F0] mt-3'></div>}
                  </>
                );
              })}
            </div>

            <div className='mt-8'>
              <p className='text-2xl font-medium'>Recommended for you</p>
              {seedData2.map((item, index) => {
                return (
                  <>
                    <Restaurant key={item.id} name={item.name} opening={item.opening} prepareTime={item.prepareTime} />
                    {index !== seedData2.length - 1 && <div className='border-b border-[#E2E8F0] mt-3'></div>}
                  </>
                );
              })}
            </div>
          </>
        )}

        {searchString.length !== 0 && (
          <div className='mt-8'>
            <p className='text-2xl font-medium'>Search results</p>
            {seedData2
              .filter(item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
              .map((item, index) => {
                return (
                  <>
                    <Restaurant key={item.id} name={item.name} opening={item.opening} prepareTime={item.prepareTime} />
                    {index !== seedData2.filter(item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1).length - 1 && (
                      <div className='border-b border-[#E2E8F0] mt-3'></div>
                    )}
                  </>
                );
              })}

            {seedData2.filter(item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1).length === 0 && (
              <p className='mt-3 text-center'>No results found</p>
            )}
          </div>
        )}
      </BodyWrapper>
      <BottomNavigation />
    </>
  );
};

export default Home;
