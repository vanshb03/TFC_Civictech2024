import React from "react";

import { Img } from "components";

const ProductListingdesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[2302px] sm:h-auto object-cover w-full"
          src="images/img_productlisting.png"
          alt="productlisting"
        />
      </div>
    </>
  );
};

export default ProductListingdesktopPage;
