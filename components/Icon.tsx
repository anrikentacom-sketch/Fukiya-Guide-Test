import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", filled = false, size }) => {
  return (
    <span 
      className={`material-symbols-outlined ${filled ? 'fill-1' : ''} ${className}`}
      style={size ? { fontSize: `${size}px` } : undefined}
    >
      {name}
    </span>
  );
};
