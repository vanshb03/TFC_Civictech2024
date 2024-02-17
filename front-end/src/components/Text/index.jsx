import React from "react";

const sizeClasses = {
  txtStyreneAWebRegular13: "font-normal font-styreneaweb",
  txtStyreneAWebRegular24: "font-normal font-styreneaweb",
  txtStyreneAWebRegular24Black900: "font-normal font-styreneaweb",
  txtStyreneAWebRegular11Gray700: "font-normal font-styreneaweb",
  txtStyreneAWebRegular16: "font-normal font-styreneaweb",
  txtStyreneAWebRegular18: "font-normal font-styreneaweb",
  txtStyreneAWebRegular18WhiteA700: "font-normal font-styreneaweb",
  txtStyreneAWebRegular13Gray700: "font-normal font-styreneaweb",
  txtStyreneAWebRegular11: "font-normal font-styreneaweb",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
