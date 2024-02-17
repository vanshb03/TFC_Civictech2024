import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-black-900",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = { xs: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "xs",
  variant = "fill",
  color = "gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50", "black_900"]),
};

export { Button };
