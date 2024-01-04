import React from 'react';
import logo from '../assets/g.png';

export default function Sidebar() {
  const gradeintColor = {
    background: 'rgb(10,12,66)',
    background: 'linear-gradient(0deg, rgba(10,12,66,1) 0%, rgba(35,20,97,1) 100%)',
  };

  const listItems = [
    {
      name: 'Dashboard',
      icon: '',
      active_color: '',
    },
    {
      name: 'Students',
      icon: '',
      active_color: '',
    },
    {
      name: 'Teachers',
      icon: '',
      active_color: '',
    },
    {
      name: 'Class',
      icon: '',
      active_color: '',
    },
    {
      name: 'Attendance',
      icon: '',
      active_color: '',
    },
    {
      name: 'Examination',
      icon: '',
      active_color: '',
    },
    {
      name: 'Payment',
      icon: '',
      active_color: '',
    },
    {
      name: 'Expanses',
      icon: '',
      active_color: '',
    },
  ];

  return (
    <div style={gradeintColor} className='h-full w-[20rem] text-white flex flex-col items-start justify-start'>
      <div className="logo flex items-center w-full border-b-[1px] px-[0.5rem] pb-[1rem]">
        <img className='w-[20%] ml-[1rem]' src={logo} alt="" />
        <h1 className='mx-[0.5rem] text-2xl font-bold'>Educkart</h1>
      </div>
      <div className="flow flex flex-col w-full">
        {listItems.map((item, index) => (
          <div className='w-full h-[2rem] my-[0.2rem] bg-gray-600 flex items-center justify-center border-sm' key={index}>
            <p className='text-white'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
