import React from 'react'
import { Search, Mail, Bell,ListVideo } from 'lucide-react';
import profile from "../../assets/p.png"
export default function Main() {
  return (
    <div className='w-full h-full bg-[#efefef]'>
      <div className="top h-[10%] bg-[white] w-full flex items-center justify-end">
          <div className="flex items-center justify-end">
            <div className="input-field relative">
              <input type="text" name="search" id="" placeholder='search' className='bg-[#efefef] rounded-sm px-[0.5rem] py-[0.3rem] w-[15rem]' />
              <Search className='w-[22px] h-[22px] absolute top-[6px] right-[10px]' />
            </div>
            <Mail className='ml-[2rem]' />
            <Bell className='mx-[2rem]' />
            <img className='w-[4%] mr-[2.5rem]' src={profile} alt="" />
          </div>
      </div>
      <div className="body w-full h-[90%] pl-[0.5rem]">
        <div className="header flex items-center p-[1rem]">
          <ListVideo className='w-[30px] h-[30px]'/>
          <p className='font-bold text-xl ml-[0.5rem]' >Dashboard</p>
        </div>
        <div className="dash-buttons">
          <button className="btn1 px-[1rem] py-[0.4rem] ml-[1rem] text-[white] font-semibold bg-[orange] rounded-[5rem]">Today</button>
          <button className="btn2 px-[1rem] py-[0.4rem] ml-[1rem] text-[#d9deff] font-semibold">Overall Status</button>
          <button className="btn3 px-[1rem] py-[0.4rem] ml-[1rem] text-[#d9deff] font-semibold">Task</button>
          <button className="btn4 px-[1rem] py-[0.4rem] ml-[1rem] text-[#d9deff] font-semibold">Expence CS</button>
          <button className="btn5 px-[1rem] py-[0.4rem] ml-[1rem] text-[#d9deff] font-semibold">IAMT status</button>
          <button className="btn5 px-[1rem] py-[0.4rem] ml-[1rem] text-[#d9deff] font-semibold">Transport</button>
        </div>
        <h1 className='font-bold text-[1rem] p-[1rem]' >Today Progress</h1>   
        <div className="flex w-[100%] h-[75.2%]">
          <div className="flex items-center w-[75%]">
            <div className="flex h-[100%] w-[100%]">
              <div className="flex w-[60%] h-[30%] bg-[lightgreen]">
                <div className="w-[50%] h-[90%] bg-[#a8a8c8] m-[0.5rem] rounded-sm mr-[0]"></div>
                <div className="w-[50%] h-[90%] bg-[#a8a8c8] m-[0.5rem] rounded-sm"></div>
              </div>
              <div className="flex w-[40%] h-[50%] bg-[#a8a8c8]"></div>
            </div>
          </div>
          <div className="flex items-center w-[25%] bg-[green]">
            <div className="flex"></div>
          </div>
        </div>   
        </div>
    </div>
  )
}
