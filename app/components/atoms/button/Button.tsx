import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string; 
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={`rounded-full cursor-pointer ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
