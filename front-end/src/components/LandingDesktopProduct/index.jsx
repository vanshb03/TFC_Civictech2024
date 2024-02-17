import React from "react";

import { Img, Text } from "components";

const LandingDesktopProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-full relative w-full">
          <Img
            className="md:h-[279px] h-full m-auto max-h-[279px] object-cover"
            alt="image"
            src={props?.image}
          />
          <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-end justify-end mx-auto p-[15px] w-full">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_plus.svg"
              alt="plus"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[3px] items-start justify-start pb-[13px] w-full">
          <Text
            className="text-[13px] text-black-900 w-full"
            size="txtStyreneAWebRegular13"
          >
            {props?.productname}
          </Text>
          <Text
            className="text-[13px] text-black-900 w-full"
            size="txtStyreneAWebRegular13"
          >
            {props?.price}
          </Text>
        </div>
      </div>
    </>
  );
};

LandingDesktopProduct.defaultProps = {
  image: "images/img_image.png",
  productname: "Classic Easy Zipper Tote",
  price: "$298",
};

export default LandingDesktopProduct;
