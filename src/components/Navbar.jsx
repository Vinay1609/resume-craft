import React from "react";
import SidePanel from "./SidePanel";

const Navbar = ({ children }) => {
  return (
    <div className="bg-gray-50 pr-8 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <SidePanel printRef={children.props.printRef} />
        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white self-center max-w-full flex-col items-stretch mt-10 p-4 rounded-lg max-md:mt-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
