import React from 'react'
import logo from '../assets/g.png'
export default function Sidebar() {
    const gradeintColor = {
        background: 'rgb(10,12,66)',
        background: 'linear-gradient(0deg, rgba(10,12,66,1) 0%, rgba(35,20,97,1) 100%)'
    }
    const listItems = {
        
    }
  return (
    <div style={gradeintColor} className='h-full w-[20rem] p-[0.5rem]  text-white flex flex-col items-start justify-start'>
        <div className="logo flex items-center w-full border-b-[1px] px-[0.5rem] pb-[1rem]">
            <img className='w-[20%] ml-[1rem]' src={logo} alt="" />
            <h1 className='mx-[0.5rem] text-2xl font-bold'>Educkart</h1>
        </div>
    </div>
  )
}
