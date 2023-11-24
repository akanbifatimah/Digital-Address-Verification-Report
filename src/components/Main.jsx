import React from 'react'
import CustomerInfo from './CustomerInfo'
import AddressInfo from './AddressInfo'
import VerificationStatus from './VerificationStatus'
import BuildingImage from './BuildingImage'

const Main = () => {
  return (
    <div className='flex flex-col sm:flex-row  gap-5 '>
      <div className='flex-1 sm:gap-5 flex flex-col'>
        <CustomerInfo/>
        <AddressInfo/>
      </div>
      <div className='flex-1 sm:gap-5 flex flex-col'>
        <VerificationStatus/>
        <BuildingImage/>
      </div>
    </div>
  )
}

export default Main
