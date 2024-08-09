import React from "react";

interface ButtonProps {
  children: React.ReactNode | string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-primary-text py-3 px-5 border rounded-full text-base font-bold font-albertSans">
      {children}
    </button>
  );
};

export default Button;
