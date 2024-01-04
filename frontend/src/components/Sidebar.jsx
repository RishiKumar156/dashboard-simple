import React, { useState } from 'react';
import logo from '../assets/g.png';
import { Gauge, Plus, Cpu, LayoutList } from 'lucide-react';
import { PiStudent } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { MdOutlineNoteAlt } from "react-icons/md";
import { MdPayment } from "react-icons/md";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const gradeintColor = {
    background: 'rgb(10,12,66)',
    background: 'linear-gradient(0deg, rgba(10,12,66,1) 0%, rgba(35,20,97,1) 100%)',
  };

  const listItems = [
    {
        name: 'Dashboard',
        icon: <Gauge className="w-[20px] h-[20px]" />,
        active_color: '',
    },
    {
    name: 'Students',
    icon: <PiStudent className="w-[20px] h-[20px]" />,
    active_color: '',
    },
    {
    name: 'Teachers',
    icon: <Cpu className="w-[20px] h-[20px]" />,
    active_color: '',
    },
    {
        name: 'Class',
    icon: <MdOutlineClass className="w-[20px] h-[20px]" />,
    active_color: '',
    },
    {
    name: 'Attendance',
    icon:<FaRegCalendarAlt className="w-[20px] h-[20px]" />,
    active_color: '',
    },
    {
        name: 'Examination',
        icon: <MdOutlineNoteAlt className="w-[20px] h-[20px]" />,
        active_color: '',
    },
    {
        name: 'Payment',
        icon:<MdPayment className="w-[20px] h-[20px]" />,
        active_color: '',
    },
    {
        name: 'Expanses',
        icon: <LayoutList className="w-[20px] h-[20px]" />,
        active_color: '',
    },
    ];
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={gradeintColor} className='h-full w-[20rem] text-white flex flex-col items-start justify-start'>
      <div className="logo flex items-center w-[90%] border-b-[1px] m-[0.5rem] pb-[1rem]">
        <img className='w-[20%] ml-[1rem]' src={logo} alt="" />
        <h1 className='mx-[0.5rem] text-2xl font-bold'>Educkart</h1>
      </div>
      <div className="flow flex flex-col w-[100%] mt-2">
        {listItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(index)}
            className={'w-[100%] h-[2.3rem] mb-[0.2rem] bg-[#ffffff3c] text-[1rem] flex items-center justify-between border-sm ' + (index === activeIndex ? 'text-orange-500' : 'text-white')}
          >
            <div className={"flex items-center ml-[1.8rem] "}>
              {item.icon}
              <p className='ml-[0.5rem]'>{item.name}</p>
            </div>
            { index === activeIndex ? '' : <Plus className="mr-[1.8rem] w-[20px] h-[20px]" />}
          </div>
        ))}
      </div>
    </div>
  );
}
