import React from "react";
import stamp from '../Images/stamp.svg'
const Footer = () => {
  return (
    <div className="w-full  rounded-lg bg-white flex flex-col sm:flex-row items-center gap-4 px-5 sm:px-[32px] py-4">
      <div className="flex sm:w-[668px] flex-col gap-2">
        <p className="text-[12px] font-light">CERTIFICATION</p>
        <p className="font-normal text-[16px] text-[#232323]">
          I ------------------------------------- hereby certify that the
          information presented for the above named customer for address
          verification is true and accurate.
        </p>
      </div>
      <div className="flex flex-1 flex-col sm:flex-row  sm:items-center gap-4 sm:gap-8 sm:w-[412px sm:justify-center">
        <div className=" flex-col gap-2 items-center justify-center flex">
          <p className="text-[12px] font-light pt-2 ">
            ------------------------------------------{" "}
          </p>
          <p className="font-normal text-[14px] px-2 text-[#667085]">
            SIGNATURE & DATE
          </p>
        </div>
        <div>
        <img src={stamp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
