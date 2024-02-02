import React from "react";
import { useNavigate } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { useReactToPrint } from "react-to-print";
import { FaShareAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";

const SidePanel = ({ printRef }) => {
  const downloadPDF = useReactToPrint({
    content: () => printRef.current,
  });

  const navigate = useNavigate();
  const handleNaigateAdmin = () => {
    navigate("/admin");
  };
  const handlePreviewNavigation = () => {
    navigate("/");
  };
  const menuItems = (
    <>
      <div
        className="flex space-x-3  items-start gap-3.5"
        onClick={handlePreviewNavigation}
      >
        <VscPreview
          color="grey"
          size="30px"
          className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-slate-950 text-base font-semibold self-start">
          Preview
        </div>
      </div>
      <div className="flex space-x-3  items-start gap-3.5 ">
        <RiAdminLine
          color="grey"
          size="30px"
          className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div
          className="text-slate-950 text-base font-semibold self-center my-auto"
          onClick={handleNaigateAdmin}
        >
          Admin
        </div>
      </div>
      <div className="flex space-x-3  items-start gap-3.5 ">
        <MdDownloadForOffline
          color="grey"
          size="30px"
          className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div
          className="text-slate-950 text-base font-semibold self-center my-auto"
          onClick={downloadPDF}
        >
          Download
        </div>
      </div>
      <div className="flex space-x-3  items-start gap-3.5  px-px">
        <FaShareAlt
          color="grey"
          size="30px"
          className="aspect-[0.92] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-slate-950 text-base font-semibold self-center my-auto">
          Share
        </div>
      </div>
    </>
  );
  const logo = (
    <>
      <div className="flex items-center justify-center gap-4">
        <div className="flex-col fill-indigo-500 overflow-hidden relative flex aspect-square justify-center items-center flex-1">
          <img
            loading="lazy"
            alt="img"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <img
            loading="lazy"
            alt="img"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
            className="aspect-square object-contain object-center w-full fill-indigo-500 overflow-hidden"
          />
        </div>
        <div className="text-slate-950 text-2xl font-semibold self-center my-auto">
          Resume
        </div>
      </div>
    </>
  );

  return (
    <div className="flex flex-col max-md:flex-row  items-stretch  max-md:ml-0">
      <div className="bg-white flex w-full grow flex-col hidden md:block  mx-auto py-12 items-start max-md:mt-8">
        <div className="self-stretch flex flex-col pl-6 pr-14 items-start max-md:px-5 ">
          {logo}
        </div>
        <div className="bg-white flex w-full grow flex-col mx-auto py-5 items-start max-md:mt-8 hidden md:block">
          <div className="self-stretch flex flex-col max-md:flex-row items-stretch gap-10  mt-10 mb-80 pl-8 pr-16 max-md:my-10 max-md:px-5">
            {menuItems}
          </div>
        </div>
      </div>
      <div className="bg-white hidden max-md:block w-full">
        <div className="flex flex-row justify-between items-center py-5 px-5 ">
          {logo}
          {menuItems}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
