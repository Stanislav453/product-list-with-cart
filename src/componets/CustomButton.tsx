import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  className: string;
};

export const CustomButton = ({ className, children }: CustomButtonProps) => {
  return (
    <button
      className={`
        w-full p-3 text-white bg-redFontColor rounded-full hover:bg-red-800
        ${className}
    `}
    >
      {children}
    </button>
  );
};
