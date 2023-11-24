import React from 'react'
import logo from '../Images/logo.svg'
const Header = () => {
  return (
    <div className='w-full  rounded-lg bg-white flex flex-col sm:flex-row items-center gap-4 px-5 sm:px-[32px] py-4'>
      <img src={logo} alt="" />
      <h3 className='font-medium text-medium text-[28px]'>Digital Address Verification Report</h3>
    </div>
  )
}

export default Header
