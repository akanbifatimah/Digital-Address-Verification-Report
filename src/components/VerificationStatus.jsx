import React, { useState } from "react";
import check from "../Images/greenIcon.png";
import failed from "../Images/failed.svg";
const VerificationStatus = () => {
    const [status,setStatus]=useState(false)
  return (
    <div className="w-full sm:h-[282px]  rounded-[6px] bg-white flex flex-col  gap-4 px-5 sm:px-[32px] py-4">
      <div className="flex justify-between w-full items-center">
        <p className="text-[12px] font-light">VERIFICATION STATUS</p>
        <button
          className={`py-3 px-2 rounded-lg w-[108px] ${
            status ? "bg-[#FFEFEE] text-[#D92D20]" : "bg-[#ECFDF3] text-[#027A48]"
          } font-medium text-center`}
        >
          {status ? "Failed" : "Verified"}
        </button>
      </div>
      <div className="flex justify-between w-full items-center px-4  py-3 border-b">
        <p className="text-[16px] font-normal">Valid address</p>
        <span className="flex justify-end ml-auto text-[#027A48] font-medium text-center">
          <img src={check} alt="" />
        </span>
      </div>
      <div className="flex justify-between w-full items-center px-4  py-3 border-b">
        <p className="text-[16px] font-normal">Address building</p>
        <span className="flex justify-end ml-auto text-[#027A48] font-medium text-center">
          <img src={check} alt="" />
        </span>
      </div>
      <div className="flex justify-between w-full items-center px-4  py-3 border-b">
        <p className="text-[16px] font-normal">Customer resides at the declared address</p>
       
        {status ?<span className="flex justify-end ml-auto text-[#027A48] font-medium text-center">
          <img src={failed} alt="" />
        </span> :
        <span className="flex justify-end ml-auto text-[#027A48] font-medium text-center">
          <img src={check} alt="" />
        </span>}
      </div>
    </div>
  );
};

export default VerificationStatus;
