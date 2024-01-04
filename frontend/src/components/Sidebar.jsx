import React from 'react';
import logo from '../assets/g.png';
import { Gauge, Plus, Cpu, LayoutList} from 'lucide-react';
import { PiStudent } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { MdOutlineNoteAlt } from "react-icons/md";
import { MdPayment } from "react-icons/md";
export default function Sidebar() {
    const [active , setActive] = useState(false);
  const gradeintColor = {
    background: 'rgb(10,12,66)',
    background: 'linear-gradient(0deg, rgba(10,12,66,1) 0%, rgba(35,20,97,1) 100%)',
  };

  const listItems = [
    {
      name: 'Dashboard',
      icon: <Gauge />,
      active_color: '',
    },
    {
      name: 'Students',
      icon: <PiStudent />,
      active_color: '',
    },
    {
      name: 'Teachers',
      icon: <Cpu />,
      active_color: '',
    },
    {
      name: 'Class',
      icon: <MdOutlineClass />,
      active_color: '',
    },
    {
      name: 'Attendance',
      icon:<FaRegCalendarAlt />,
      active_color: '',
    },
    {
      name: 'Examination',
      icon: <MdOutlineNoteAlt />,
      active_color: '',
    },
    {
      name: 'Payment',
      icon:<MdPayment />,
      active_color: '',
    },
    {
      name: 'Expanses',
      icon: <LayoutList />,
      active_color: '',
    },
  ];

  return (
    <div style={gradeintColor} className='h-full w-[20rem] text-white flex flex-col items-start justify-start'>
      <div className="logo flex items-center w-[90%] border-b-[1px] m-[0.5rem] pb-[1rem]">
        <img className='w-[20%] ml-[1rem]' src={logo} alt="" />
        <h1 className='mx-[0.5rem] text-2xl font-bold'>Educkart</h1>
      </div>
      <div className="flow flex flex-col w-[100%] mt-2">
        {listItems.map((item, index) => (
          <div className='w-[100%] h-[2.3rem] mb-[0.2rem] bg-[#ffffff3c] text-[1rem] flex items-center justify-between border-sm' key={index}>
            <div className="flex items-center ml-[1rem]">
                {item.icon}
                <p className='text-white ml-[0.5rem]'>{item.name}</p>
            </div>
            <Plus className="mr-[0.5rem]" />
          </div>
        ))}
      </div>
    </div>
  );
}
