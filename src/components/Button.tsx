import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: string;
  variant:
    | 'btn_dark_green'
    | 'btn_green'
    | 'btn_white_text'
    | 'btn_white'
    | 'btn_dark_green_outline';
}

const Button = ({ title, icon, variant, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={`flexCenter gap-3 rounded-full border ${variant} ${props.className}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span>{title}</span>
    </button>
  );
};

export default Button;
