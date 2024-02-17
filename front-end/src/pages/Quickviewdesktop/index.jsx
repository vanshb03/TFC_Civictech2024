import React from "react";

import { Img } from "components";

const QuickviewdesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[824px] sm:h-auto object-cover w-full"
          src="images/img_quickviewdesktop.png"
          alt="quickviewdeskto"
        />
      </div>
    </>
  );
};

export default QuickviewdesktopPage;