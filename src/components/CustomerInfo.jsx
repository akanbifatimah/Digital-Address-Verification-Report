import React from "react";
import man from "../Images/man.png";
import Info from "./Info";

const CustomerInfo = () => {
  return (
    <div className="w-full sm:h-[282px]  rounded-[6px] bg-white flex items-center gap-4 px-5 sm:px-[32px] py-4">
      <div className="w-full  flex flex-col sm:flex-row  sm:gap-[71px]">
        <div className="flex flex-col gap-4 py-4">
          <p className="text-[12px] font-light">CUSTOMER INFORMATION</p>
          <img src={man} alt="" className="max-w-[100%]"/>
          <div className="flex flex-col gap-0">
            <h3 className="text-center font-medium text-[14px]">12345H</h3>
            <p className="text-[12px] font-normal">CUSTOMER INFORMATION</p>
          </div>
        </div>
        <div className="flex flex-col py-4 gap-4 sm:gap-10">
          <div className="flex gap-8 flex-col sm:flex-row sm:gap-[111px] ">
            <Info title={"Victor"} info={"FIRST NAME"} />
            <Info title={"Nigeria"} info={"COUNTRY"} />
          </div>
          <div className="flex gap-8 flex-col sm:flex-row  sm:gap-[91px] ">
            <Info title={"Adebowale"} info={"LAST NAME"} />
            <Info title={"0902 234 5678"} info={"PHONE NUMBER"} />
          </div>
          <div className="flex gap-8 sm:gap-[91px]  ">
            <Info title={"01/04/2023 09:22am"} info={"VERIFICATION TIME STAMP"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;


