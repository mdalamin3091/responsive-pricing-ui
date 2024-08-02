import React from "react";
import BaseButton from "./BaseButton";
import { buttonStyles } from "./ButtonStyled";

interface ButtonProps {
  variant: keyof typeof buttonStyles;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const style = buttonStyles[variant] || {};
  const { backgroundColor, color, icon } = style;

  return (
    <BaseButton
      style={{ backgroundColor, color }}
      onClick={onClick}
      showIcon={icon}
    >
      {children}
    </BaseButton>
  );
};

export default Button;