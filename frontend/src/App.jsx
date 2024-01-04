import React from 'react'
import Sidebar from './components/sidebar'
import Main from './components/Main/Main'
export default function App() {
  return (
    <div className='flex w-full h-[100vh]' >
      <Sidebar />
      <Main />
    </div>
  )
}
