import React from 'react'
import Info, { GreenInfo } from './Info'

const AddressInfo = () => {
  return (
    <div className="w-full sm:h-[331px]  rounded-[6px] bg-white flex flex-col gap-4 px-5 sm:px-[32px] py-4">
      <p className="text-[12px] font-light">ADDRESS INFORMATION</p>
      <div className="flex flex-col py-4 gap-4 sm:gap-10">
          <div className="flex gap-8 flex-col sm:flex-row  sm:gap-[111px] ">
            <Info title={"25 Abule-Oja road, Akoka, Yaba"} info={"CURRENT ADDRESS"} />
            <Info title={"Lagos"} info={"STATE"} />
          </div>
          <div className="flex gap-8 flex-col sm:flex-row  sm:gap-[291px] ">
            <Info title={"Somolu"} info={"LGA"} />
            <Info title={"Univeristy of Lagos"} info={"NEARBY LANDMARK"} />
          </div>
          <div className="flex gap-8 flex-col sm:flex-row  sm:gap-[231px]  ">
            <GreenInfo title={"View Map URL"} info={"MAP URL"} />
            <GreenInfo title={"View Electricity Bill"} info={"ELECTRICITY BILL URLL"} />

          </div>
        </div>
    </div>
  )
}

export default AddressInfo
