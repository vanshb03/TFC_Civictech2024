import React from "react";

import { Img, Text } from "components";

const LandingDesktopProduct1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-full relative w-full">
          <Img
            className="md:h-[279px] h-full m-auto max-h-[279px] object-cover"
            src="images/img_image_2.png"
            alt="image_Two"
          />
          <div className="absolute bg-white-A700_cc bottom-[0] flex flex-1 flex-row gap-3 inset-x-[0] items-end justify-between mx-auto p-[15px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-[13px] text-black-900 w-full"
                size="txtStyreneAWebRegular13"
              >
                {props?.variationname}
              </Text>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
                <Img className="h-5 w-5" src="images/img_user.svg" alt="user" />
                <Img
                  className="h-5 w-5"
                  src="images/img_close.svg"
                  alt="close"
                />
              </div>
            </div>
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

LandingDesktopProduct1.defaultProps = {
  variationname: "Camel",
  productname: "Single-Origin Cashmere Beanie",
  price: "$98",
};

export default LandingDesktopProduct1;
