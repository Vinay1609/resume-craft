import React from "react";
import { useNavigate } from "react-router-dom";

import { useReactToPrint } from "react-to-print";

const SidePanel = ({ printRef }) => {
  const downloadPDF = useReactToPrint({
    content: () => printRef.current,
  });

  const navigate = useNavigate();
  const handleNaigateAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="flex flex-col items-stretch w-[20%] max-md:w-full max-md:ml-0">
      <div className="bg-white flex w-full grow flex-col mx-auto py-12 items-start max-md:mt-8">
        <div className="self-stretch flex flex-col pl-6 pr-14 items-end max-md:px-5">
          <div className="flex items-stretch gap-4">
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
        </div>
        <div className="bg-white flex w-full grow flex-col mx-auto py-5 items-start max-md:mt-8">
          <div className="self-stretch flex flex-col items-stretch mt-10 mb-80 pl-8 pr-16 max-md:my-10 max-md:px-5">
            <div className="flex space-x-3  items-start gap-3.5">
              <img
                loading="lazy"
                alt="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76d735770155c739c04bb4c87c1b1d989951bfc723169acd38acc8cc3fca3ba?"
                className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-base font-semibold self-start">
                Dashboard
              </div>
            </div>
            <div className="flex  space-x-3 items-start gap-3.5 mt-10">
              <img
                loading="lazy"
                alt="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00c7c088d53f33448defa11fbc2959e20bd160f34269fbcd379c2c8f6ac940c3?"
                className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-base font-semibold my-auto">
                Templates
              </div>
            </div>
            <div className="flex space-x-3  items-start gap-3.5 mt-10">
              <img
                loading="lazy"
                alt="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00c7c088d53f33448defa11fbc2959e20bd160f34269fbcd379c2c8f6ac940c3?"
                className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-base font-semibold my-auto">
                AI Asistant
              </div>
            </div>
            <div className="flex space-x-3  items-start gap-3.5 mt-10">
              <img
                loading="lazy"
                alt="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ade8310a47e1e77802ae079d74a6f3f87647cb0cdeab1a569d3870cf57ee6372?"
                className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div
                className="text-slate-950 text-base font-semibold self-center my-auto"
                onClick={downloadPDF}
              >
                Download
              </div>
            </div>
            <div className="flex space-x-3  items-start gap-3.5 mt-10 px-px">
              <img
                loading="lazy"
                alt="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7446789305c454b0d97469fea2bf2fa10a2a75f4392aa30f6b3398cdaa3462?"
                className="aspect-[0.92] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-base font-semibold self-center my-auto">
                Share
              </div>
            </div>
            <div className="flex space-x-3  items-start gap-3.5 mt-10">
              <img
                loading="lazy"
                alt="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/edee0afb480fdc0fc8bd0992c9b5d58f5fb0739229e6a5a3aa09a6406f4b7554?"
                className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div
                className="text-slate-950 text-base font-semibold self-center my-auto"
                onClick={handleNaigateAdmin}
              >
                Admin
              </div>
            </div>
            <div className="flex space-x-3  items-start gap-3.5 mt-10">
              <img
                loading="lazy"
                alt="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f940df9d5b83d99ddc82bcb4c4f448f7fa69dc1d2c24d2a2e250f4227d57dcd?"
                className="aspect-[0.92] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-base font-semibold self-center my-auto">
                Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
