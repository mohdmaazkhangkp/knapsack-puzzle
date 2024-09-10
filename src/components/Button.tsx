import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  ...rest
}) => {
  return (
    <button
      className={`button-10 primary ${
        size === "medium" ? "w-[132px]" : "w-[100px]"
      } ${variant}`}
      role="button"
      {...rest}
    >
      <span className="text"> {children}</span>
    </button>
  );
};

export default Button;
