import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: string;
  variant: 'btn_dark_green';
}

const Button = ({ title, icon, variant, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span>{title}</span>
    </button>
  );
};

export default Button;