import React, { useEffect, useRef, useState } from "react";
import SidePanel from "./SidePanel";
import Preview from "./Preview";

const Navbar = () => {
  const printRef = useRef(null);

  const [excelFile, setExcelFile] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        alert("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  return (
    <div className="bg-gray-50 pr-8 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <SidePanel printRef={printRef} />
        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch mt-5 max-md:max-w-full max-md:mt-10">
            <div className="flex w-full items-stretch justify-end gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex  justify-between gap-5 self-start">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c6d4a711af25c600d91d1f7162b063fdd4c9bfb25df4c02722eaf77ace11e3e?"
                  className="aspect-[0.78] object-contain object-center w-[18px] fill-black overflow-hidden shrink-0 max-w-full my-auto"
                />
                <img
                  loading="lazy"
                  alt="img"
                  srcSet="https://s3-alpha-sig.figma.com/img/203e/bb33/eccd71f34638f7751900105c639d563d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-VbE2qdcMrq7v4feLdMARyzxrAR5hBlHFQXR1OqS2tnpEepsPzl9CBPPEZ8cbzJY~vACwMeUADPnHc4NHbo0RH4DK7LdXY6RKcxDl0T3u956kIvASC48EUEpPe7Z0hc5p7fCuVNxTnOLWSj7izNXbSHCCkgDssNBJcrAYJ2VfSGtQ8bWvBXWjjXZmIfE4BMyFZg3Nvtb1Cdzbf1FWxjwj8RRLNXHm6m8lybvVXyOS7oEyl8cBEDFMzbdwIncRbHciQJEZvM5PNGqsecmA9VtbRdOQJxoTIH-JuOBTDG16PJGhgu9qqbFNA67oN6IjilR456TQuaILyLNpusPYPgDg__"
                  className="aspect-square object-contain object-center overflow-hidden self-stretch shrink-0 max-w-full w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="bg-white self-center max-w-full flex-col items-stretch mt-10 p-4 rounded-lg max-md:mt-10">
            <Preview printRef={printRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
