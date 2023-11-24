import React from 'react'
import build1 from '../Images/img1.png';
import build2 from '../Images/img2.png'
const BuildingImage = () => {
  return (
    <div className="w-full sm:h-[331px]  rounded-[6px] bg-white flex items-center gap-4 px-5 sm:px-[32px] py-4">
     <div className='flex flex-col flex-1'>
      <p className="text-[12px] font-light">BUILDING IMAGE</p>
      <div className='flex items-center h-[251px]'>
        <img src={build1} alt=""  className='max-w-[100%]'/>
      </div>
      </div>
      <div className='flex flex-col flex-1'>
      <p className="text-[12px] font-light">NEARBY LANDMARK</p>
      <div className='flex items-center h-[251px]'>
        <img src={build2} alt=""  className='max-w-[100%]'/>
      </div>
      </div>
    </div>
  )
}

export default BuildingImage
