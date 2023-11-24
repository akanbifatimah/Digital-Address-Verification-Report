import React from "react";
import { IoEyeOutline } from "react-icons/io5"
const Info = ({title,info}) => {
  return (
    <div className="flex flex-col text-left">
      <h3 className="text-left font-medium text-[16px] text-[#161616]">{title}</h3>
      <p className="text-[12px] text-[#667085] font-normal">{info}</p>
    </div>
  );
};

export default Info;

export const GreenInfo =({title,info})=>{
    return(
        <div className="flex flex-col text-left">
        <button className="flex items-center gap-2 text-[#027A48]">
        <h3 className="text-left font-medium text-[13px]">{title}</h3>
        <IoEyeOutline color="#027A48"/>
        </button>
      
      <p className="text-[12px] text-[#667085] font-normal">{info}</p>
    </div>
    )
}
