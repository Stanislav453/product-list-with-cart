import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  className: string;
  onClick?: () => void;
};

export const CustomButton = ({
  className,
  children,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-3 text-white bg-redFontColor rounded-full hover:bg-red-800
        ${className}
    `}
    >
      {children}
    </button>
  );
};
