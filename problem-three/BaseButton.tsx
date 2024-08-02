import React from 'react';

interface BaseButtonProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick: () => void;
  showIcon?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  style,
  children,
  onClick,
  showIcon = false,
}) => {
  return (
    <button style={style} onClick={onClick}>
      {showIcon && <span>&rarr;</span>}
      {children}
    </button>
  );
};

export default BaseButton;