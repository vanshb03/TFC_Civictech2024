import React from "react";

import { Img } from "components";

const PostdesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Img
          className="h-[3504px] sm:h-auto object-cover w-[1400px] md:w-full"
          src="images/img_postdesktop.png"
          alt="postdesktop"
        />
      </div>
    </>
  );
};

export default PostdesktopPage;
