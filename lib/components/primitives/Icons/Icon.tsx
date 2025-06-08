// src/components/Icon.tsx
import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';

export type IconName = keyof typeof RadixIcons;

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ 
  name, 
  size = 15, // Radix Icons default size is 15
  color = 'currentColor',
  className 
}: IconProps) => {
  const IconComponent = RadixIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Radix Icons`);
    return null;
  }

  return (
    <IconComponent 
      width={size} 
      height={size} 
      color={color}
      className={className}
    />
  );
};
