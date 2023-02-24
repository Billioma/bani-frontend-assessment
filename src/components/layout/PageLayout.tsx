import React, { useState, useEffect } from "react";
import { IChildren } from "../../utils/types";
import Footer from "./Footer";

const PageLayout = ({ children }: IChildren) => {
  const [min, setMin] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setMin(false);
      } else {
        setMin(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="font-hele font-[400] flex pb-[40px] flex-col min-h-screen bg-[#f5f6fa] text-black">
      <div
        className={`flex flex-col items-center justify-center mx-auto mb-[33px] w-[50%] ${
          min ? "pt-[111px]" : "pt-[80px]"
        }  min-h-screen flex-1"`}
      >
        {children}
      </div>
      <div className="flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
